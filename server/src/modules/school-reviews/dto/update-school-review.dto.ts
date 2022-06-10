import { PartialType } from "@nestjs/mapped-types";
import { CreateSchoolReviewDto } from "./create-school-review.dto";

export class UpdateSchoolReviewDto extends PartialType(CreateSchoolReviewDto) {}
