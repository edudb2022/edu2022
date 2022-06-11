import { Injectable } from "@nestjs/common";
import { CreateAdmissionOfferReviewDto } from "./dto/create-admission-offer-review.dto";
import { UpdateAdmissionOfferReviewDto } from "./dto/update-admission-offer-review.dto";

@Injectable()
export class AdmissionOfferReviewsService {
  create(createAdmissionOfferReviewDto: CreateAdmissionOfferReviewDto) {
    return "This action adds a new admissionOfferReview";
  }

  findAll() {
    return `This action returns all admissionOfferReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admissionOfferReview`;
  }

  update(
    id: number,
    updateAdmissionOfferReviewDto: UpdateAdmissionOfferReviewDto
  ) {
    return `This action updates a #${id} admissionOfferReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} admissionOfferReview`;
  }
}
