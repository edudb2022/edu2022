import { PartialType } from "@nestjs/mapped-types";
import { CreateProgramReviewDto } from "./create-program-review.dto";

export class UpdateProgramReviewDto extends PartialType(
  CreateProgramReviewDto
) {}
