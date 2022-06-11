import { Module } from "@nestjs/common";
import { SchoolReviewsService } from "@modules/school-reviews/school-reviews.service";
import { SchoolReviewsController } from "@modules/school-reviews/school-reviews.controller";

@Module({
  controllers: [SchoolReviewsController],
  providers: [SchoolReviewsService],
})
export class SchoolReviewsModule {}
