import { PartialType } from "@nestjs/mapped-types";
import { CreateAdmissionOfferReviewDto } from "@modules/admission-offer-reviews/dto/create-admission-offer-review.dto";

export class UpdateAdmissionOfferReviewDto extends PartialType(
  CreateAdmissionOfferReviewDto
) {}
