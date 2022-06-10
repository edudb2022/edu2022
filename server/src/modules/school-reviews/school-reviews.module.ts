import { Module } from "@nestjs/common";
import { SchoolReviewsService } from "./school-reviews.service";
import { SchoolReviewsController } from "./school-reviews.controller";

@Module({
  controllers: [SchoolReviewsController],
  providers: [SchoolReviewsService],
})
export class SchoolReviewsModule {}
