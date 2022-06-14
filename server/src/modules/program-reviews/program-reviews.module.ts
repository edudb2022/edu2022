import { Module } from "@nestjs/common";
import { ProgramReviewsService } from "@modules/program-reviews/program-reviews.service";
import { ProgramReviewsController } from "@modules/program-reviews/program-reviews.controller";

@Module({
  controllers: [ProgramReviewsController],
  providers: [ProgramReviewsService],
})
export class ProgramReviewsModule {}
