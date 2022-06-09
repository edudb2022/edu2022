import { Module } from "@nestjs/common";
import { InterviewReviewsService } from "./interview-reviews.service";
import { InterviewReviewsController } from "./interview-reviews.controller";

@Module({
  controllers: [InterviewReviewsController],
  providers: [InterviewReviewsService],
})
export class InterviewReviewsModule {}
