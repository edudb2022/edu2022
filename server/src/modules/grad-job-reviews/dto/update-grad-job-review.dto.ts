import { PartialType } from "@nestjs/swagger";
import { CreateGradJobReviewDto } from "./create-grad-job-review.dto";

export class UpdateGradJobReviewDto extends PartialType(
  CreateGradJobReviewDto
) {}
