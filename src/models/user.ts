import Grade from "../types/grade";
import Major from "../types/major";

class UserModel {
  name: String;
  description: String;
  point: number;
  grade: Grade;
  major: Major;
  image: string;

  constructor(name: String, description?: String, point?: number, grade?: Grade, major?: Major, image?: string) {
    this.name = name;
    this.description = description ?? "";
    this.point = point ?? 0;
    this.grade = grade ?? Grade.BRONZE;
    this.major = major ?? Major.NONE;
    this.image = image ?? "";
  }
}

export default UserModel;