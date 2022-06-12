import { AdmissionOfferReviewsController } from "@modules/admission-offer-reviews/admission-offer-reviews.controller";
import { AdmissionOfferReviewsService } from "@modules/admission-offer-reviews/admission-offer-reviews.service";
import { AdmissionOfferReview } from "@modules/admission-offer-reviews/entities";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([AdmissionOfferReview])],
  controllers: [AdmissionOfferReviewsController],
  providers: [AdmissionOfferReviewsService],
})
export class AdmissionOfferReviewsModule {}
