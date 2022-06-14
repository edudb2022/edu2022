import { GradJobReviewsController } from "@modules/grad-job-reviews/grad-job-reviews.controller";
import { GradJobReviewsService } from "@modules/grad-job-reviews/grad-job-reviews.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [GradJobReviewsController],
  providers: [GradJobReviewsService],
})
export class GradJobReviewsModule {}
