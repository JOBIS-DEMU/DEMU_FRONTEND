import { Bronze, Silver, Gold, Platinum, Diamond } from "../assets/rankIcons";

enum Grade {
  BRONZE = "bronze",
  SILVER = "silver",
  GOLD = "gold",
  PLATINUM = "platinum",
  DIAMOND = "diamond"
};

function getRankIcon(gradeStr: string) {
  const grade = gradeStr.toLowerCase() as Grade;
  
  switch (grade) {
    case Grade.BRONZE:
      return Bronze;
    case Grade.SILVER:
      return Silver;
    case Grade.GOLD:
      return Gold;
    case Grade.PLATINUM:
      return Platinum;
    case Grade.DIAMOND:
      return Diamond;
  }
}

export { getRankIcon };

export default Grade;