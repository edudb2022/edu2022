import { Module } from "@nestjs/common";
import { AdmissionOfferReviewsService } from "./admission-offer-reviews.service";
import { AdmissionOfferReviewsController } from "./admission-offer-reviews.controller";

@Module({
  controllers: [AdmissionOfferReviewsController],
  providers: [AdmissionOfferReviewsService],
})
export class AdmissionOfferReviewsModule {}
