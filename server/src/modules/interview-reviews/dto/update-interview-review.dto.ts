import { PartialType } from "@nestjs/mapped-types";
import { CreateInterviewReviewDto } from "@modules/interview-reviews/dto/create-interview-review.dto";

export class UpdateInterviewReviewDto extends PartialType(
  CreateInterviewReviewDto
) {}
