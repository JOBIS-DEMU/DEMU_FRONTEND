import { AxiosError, AxiosResponse } from "axios";
import api from "../apis/Api";
import UserModel from "../models/user";
import Grade from "../types/grade";
import Major from "../types/major";

enum UserResponse {
  OK,       // 성공적인 처리
  INVAILD,  // 잘못된 요청 (Request 형식)
  FORBIDDEN,// 권한 없음 (자동 refresh 실패)
  NOTFOUND, // 찾을 수 없음
  CONFLICT, // 이미 있음
  ERROR     // 서버에서 오류가 발생
};

class UserService {
  static async get(handler: (data: UserModel) =>  void): Promise<UserResponse> {
    try {
      const res: AxiosResponse = await api.get('/user/my-page');
      const infoData = res.data;
      const percent = await api.patch("/post/grade");
      console.log(infoData.profile);
      
      const data: UserModel = new UserModel(infoData.nickname, infoData.intro, percent.data.percent, infoData.grade as Grade, infoData.major as Major, infoData.profile);
      handler(data);
      return UserResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return UserResponse.INVAILD;
        case 403:
          return UserResponse.FORBIDDEN;
        case 404:
          return UserResponse.NOTFOUND;
        default:
          return UserResponse.ERROR;
      }
    }
  }

  static async setName(name: string): Promise<UserResponse> {
    try {
      await api.patch(
        "/user/nickname", {
          nickname: name
        }
      );
      return UserResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return UserResponse.INVAILD;
        case 403:
          return UserResponse.FORBIDDEN;
        case 409:
          return UserResponse.CONFLICT;
        default:
          return UserResponse.ERROR;
      }
    }
  }

  static async setMajor(major: Major): Promise<UserResponse> {
    try {
      await api.patch(
        "/user/major", {
          major: major.toUpperCase()
        }
      );
      return UserResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return UserResponse.INVAILD;
        case 403:
          return UserResponse.FORBIDDEN;
        default:
          return UserResponse.ERROR;
      }
    }
  }

  static async setImage(image: File): Promise<UserResponse> {
    try {
      const formData = new FormData();
      formData.append('image', image);

      await api.patch('/user/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return UserResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return UserResponse.INVAILD;
        case 403:
          return UserResponse.FORBIDDEN;
        default:
          return UserResponse.ERROR;
      }
    }
  }

  static async setDescription(description: string): Promise<UserResponse> {
    try {
      await api.patch(
        "/user/intro", {
          intro: description
        }
      );
      return UserResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return UserResponse.INVAILD;
        case 403:
          return UserResponse.FORBIDDEN;
        default:
          return UserResponse.ERROR;
      }
    }
  }
}

export { UserResponse };

export default UserService;
