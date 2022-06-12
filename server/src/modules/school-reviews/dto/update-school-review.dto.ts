import { PartialType } from "@nestjs/mapped-types";
import { CreateSchoolReviewDto } from "@modules/school-reviews/dto/create-school-review.dto";

export class UpdateSchoolReviewDto extends PartialType(CreateSchoolReviewDto) {}
