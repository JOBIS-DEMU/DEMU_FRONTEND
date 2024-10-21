import Grade from "src/types/grade";

class CommentModel {
  id: number;
  name: String;
  comment: String;
  grade: Grade;

  constructor(id: number, name: String, comment: String, grade: Grade) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.grade = grade;
  }
}

export default CommentModel;