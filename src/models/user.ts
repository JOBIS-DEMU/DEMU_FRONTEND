import Grade from "src/types/grade";
import Major from "src/types/major";

class UserModel {
  name: String;
  description: String;
  point: number;
  grade: Grade;
  major: Major;

  constructor(name: String, description?: String, point?: number, tier?: Grade, major?: Major) {
    this.name = name;
    this.description = description ?? "";
    this.point = point ?? 0;
    this.grade = tier ?? Grade.BRONZE;
    this.major = major ?? Major.NONE;
  }
}

export default UserModel;