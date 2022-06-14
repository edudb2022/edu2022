import { PartialType } from "@nestjs/swagger";
import { CreateInternshipReviewDto } from "@modules/internship-reviews/dto/create-internship-review.dto";

export class UpdateInternshipReviewDto extends PartialType(
  CreateInternshipReviewDto
) {}
