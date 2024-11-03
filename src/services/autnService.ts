import { AxiosError, AxiosResponse } from "axios";
import api, { saveToken } from "../apis/Api";

enum AuthResponse {
  OK,       // 성공적인 처리
  INVAILD,  // 잘못된 요청 (Request 형식)
  BAD,      // 잘못된 요청 (사용자 입력)
  FORBIDDEN,// 권한 없음 (자동 refresh 실패)
  NOTFOUND, // 빈 결과
  ERROR     // 서버에서 오류가 발생
};

class AuthService {
  static async signup(email: string, name: string, password: string): Promise<AuthResponse> {
    try {
      const res: AxiosResponse = await api.post(
        '/public/signup', {
          accountId: email + '@dsm.hs.kr',
          nickname: name,
          password: password
        }
      );
      saveToken(res.data);
      return AuthResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return AuthResponse.INVAILD;
        case 409:
          const data = axiosError.response.data as Record<string, any>;
          if (data.message.includes("nickname")) {
            return AuthResponse.BAD;
          }
          return AuthResponse.FORBIDDEN;
        default:
          return AuthResponse.ERROR;
      }
    }
  }

  static async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const res: AxiosResponse = await api.post(
        '/public/signin', {
          accountId: email + '@dsm.hs.kr',
          password: password
        }
      );
      saveToken(res.data);
      return AuthResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 400:
          return AuthResponse.INVAILD;
        case 403:
          return AuthResponse.BAD;
        case 404:
          return AuthResponse.NOTFOUND;
        default:
          return AuthResponse.ERROR;
      }
    }
  }

  static async findPassword(email: string): Promise<AuthResponse> {
    try {
      await api.get(
        `/public/password/find/${email}`
      );
      return AuthResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 404:
          return AuthResponse.BAD;
        case 500:
          return AuthResponse.NOTFOUND;
        default:
          return AuthResponse.ERROR;
      }
    }
  }

  static async validatePassword(password: string): Promise<AuthResponse> {
    try {
      await api.post(
        `/password/validate`, {
          password: password
        }
      );
      return AuthResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 403:
          return AuthResponse.FORBIDDEN;
        case 500:
          return AuthResponse.BAD;
        default:
          return AuthResponse.ERROR;
      }
    }
  }

  static async changePassword(password: string): Promise<AuthResponse> {
    try {
      await api.post(
        `/password/reset`, {
          password: password
        }
      );
      return AuthResponse.OK;
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.response?.status) {
        case 403:
          return AuthResponse.FORBIDDEN;
        default:
          return AuthResponse.ERROR;
      }
    }
  }
}

export { AuthResponse };

export default AuthService;
