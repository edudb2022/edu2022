import { Faculty } from "@modules/faculties/entities";
import { SchoolReview } from "@modules/school-reviews/entities";
import { SchoolType } from "@modules/schools/entities";

export class SchoolDto {
  id: number;
  type: SchoolType;
  aliases: string[];
  faculties?: Faculty[];
  reviews?: SchoolReview[];
  chinese_name: string;
  english_name: string;
}
