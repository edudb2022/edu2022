import { Injectable } from "@nestjs/common";
import { CreateGradJobReviewDto } from "@modules/grad-job-reviews/dto/create-grad-job-review.dto";
import { UpdateGradJobReviewDto } from "@modules/grad-job-reviews/dto/update-grad-job-review.dto";

@Injectable()
export class GradJobReviewsService {
  create(createGradJobReviewDto: CreateGradJobReviewDto) {
    return "This action adds a new gradJobReview";
  }

  findAll() {
    return `This action returns all gradJobReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gradJobReview`;
  }

  update(id: number, updateGradJobReviewDto: UpdateGradJobReviewDto) {
    return `This action updates a #${id} gradJobReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} gradJobReview`;
  }
}
