import { Module } from "@nestjs/common";
import { ProgramReviewsService } from "./program-reviews.service";
import { ProgramReviewsController } from "./program-reviews.controller";

@Module({
  controllers: [ProgramReviewsController],
  providers: [ProgramReviewsService],
})
export class ProgramReviewsModule {}
