import { PartialType } from "@nestjs/swagger";
import { CreateGradJobReviewDto } from "@modules/grad-job-reviews/dto/create-grad-job-review.dto";

export class UpdateGradJobReviewDto extends PartialType(
  CreateGradJobReviewDto
) {}
