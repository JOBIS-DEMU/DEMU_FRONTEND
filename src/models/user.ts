import Grade from "../types/grade";
import Major from "../types/major";

class UserModel {
  name: String;
  description: String;
  point: number;
  grade: Grade;
  major: Major;

  constructor(name: String, description?: String, point?: number, grade?: Grade, major?: Major) {
    this.name = name;
    this.description = description ?? "";
    this.point = point ?? 0;
    this.grade = grade ?? Grade.BRONZE;
    this.major = major ?? Major.NONE;
  }
}

export default UserModel;