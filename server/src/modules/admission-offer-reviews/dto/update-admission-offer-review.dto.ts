import { PartialType } from "@nestjs/mapped-types";
import { CreateAdmissionOfferReviewDto } from "./create-admission-offer-review.dto";

export class UpdateAdmissionOfferReviewDto extends PartialType(
  CreateAdmissionOfferReviewDto
) {}
