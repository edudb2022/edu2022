import { CreateAdmissionOfferReviewDto } from "@modules/admission-offer-reviews/dto/create-admission-offer-review.dto";
import { UpdateAdmissionOfferReviewDto } from "@modules/admission-offer-reviews/dto/update-admission-offer-review.dto";
import { AdmissionOfferReview } from "@modules/admission-offer-reviews/entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AdmissionOfferReviewsService {
  constructor(
    @InjectRepository(AdmissionOfferReview)
    admissionOfferReviewRepository: Repository<AdmissionOfferReview>
  ) {}

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
