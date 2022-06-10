import { PartialType } from "@nestjs/mapped-types";
import { CreateInterviewReviewDto } from "./create-interview-review.dto";

export class UpdateInterviewReviewDto extends PartialType(
  CreateInterviewReviewDto
) {}
