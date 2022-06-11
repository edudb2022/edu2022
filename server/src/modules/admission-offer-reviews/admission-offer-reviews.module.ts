import { Module } from "@nestjs/common";
import { AdmissionOfferReviewsService } from "@modules/admission-offer-reviews/admission-offer-reviews.service";
import { AdmissionOfferReviewsController } from "@modules/admission-offer-reviews/admission-offer-reviews.controller";

@Module({
  controllers: [AdmissionOfferReviewsController],
  providers: [AdmissionOfferReviewsService],
})
export class AdmissionOfferReviewsModule {}
