import { Module } from "@nestjs/common";
import { InternshipReviewsService } from "@modules/internship-reviews/internship-reviews.service";
import { InternshipReviewsController } from "@modules/internship-reviews/internship-reviews.controller";

@Module({
  controllers: [InternshipReviewsController],
  providers: [InternshipReviewsService],
})
export class InternshipReviewsModule {}
