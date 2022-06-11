import { Faculty } from "../../faculties/entities";
import { SchoolType } from "../entities";

export class SchoolDto {
  id: number;
  type: SchoolType;
  aliases: string[];
  faculties: Faculty[];
  reviews: SchoolReview[];
  chinese_name: string;
  english_name: string;
}
