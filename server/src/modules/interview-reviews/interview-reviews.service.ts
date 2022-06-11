import { Injectable } from "@nestjs/common";
import { CreateInterviewReviewDto } from "@modules/interview-reviews/dto/create-interview-review.dto";
import { UpdateInterviewReviewDto } from "@modules/interview-reviews/dto/update-interview-review.dto";

@Injectable()
export class InterviewReviewsService {
  create(createInterviewReviewDto: CreateInterviewReviewDto) {
    return "This action adds a new interviewReview";
  }

  findAll() {
    return `This action returns all interviewReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interviewReview`;
  }

  update(id: number, updateInterviewReviewDto: UpdateInterviewReviewDto) {
    return `This action updates a #${id} interviewReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} interviewReview`;
  }
}
