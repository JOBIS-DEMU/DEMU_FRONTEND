import Tier from "src/types/Tier";
import Major from "src/types/major";

class UserModel {
  email: String;
  name: String;
  description: String;
  point: number;
  tier: Tier;
  major: Major;

  constructor(email: String, name: String, description?: String, point?: number, tier?: Tier, major?: Major) {
    this.email = email;
    this.name = name;
    this.description = description ?? "";
    this.point = point ?? 0;
    this.tier = tier ?? Tier.BRONZE;
    this.major = major ?? Major.NONE;
  }
}

export default UserModel;