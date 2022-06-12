import { Injectable } from "@nestjs/common";
import { CreateProgramReviewDto } from "@modules/program-reviews/dto/create-program-review.dto";
import { UpdateProgramReviewDto } from "@modules/program-reviews/dto/update-program-review.dto";

@Injectable()
export class ProgramReviewsService {
  create(createProgramReviewDto: CreateProgramReviewDto) {
    return "This action adds a new programReview";
  }

  findAll() {
    return `This action returns all programReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programReview`;
  }

  update(id: number, updateProgramReviewDto: UpdateProgramReviewDto) {
    return `This action updates a #${id} programReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} programReview`;
  }
}
