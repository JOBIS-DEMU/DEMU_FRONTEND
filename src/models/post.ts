import Grade from "src/types/grade";

class PostModel {
  id: number;
  name: String;
  title: String;
  content: String;
  recomment: number;
  heart: number;
  grade: Grade;

  constructor(id: number, name: String, title: String, content: String, recomment: number, heart: number, grade: Grade) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.content = content;
    this.recomment = recomment;
    this.heart = heart;
    this.grade = grade;
  }
}

export default PostModel;