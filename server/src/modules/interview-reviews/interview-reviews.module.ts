import { Module } from "@nestjs/common";
import { InterviewReviewsService } from "@modules/interview-reviews/interview-reviews.service";
import { InterviewReviewsController } from "@modules/interview-reviews/interview-reviews.controller";

@Module({
  controllers: [InterviewReviewsController],
  providers: [InterviewReviewsService],
})
export class InterviewReviewsModule {}
