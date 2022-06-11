import { PartialType } from "@nestjs/mapped-types";
import { CreateProgramReviewDto } from "@modules/program-reviews/dto/create-program-review.dto";

export class UpdateProgramReviewDto extends PartialType(
  CreateProgramReviewDto
) {}
