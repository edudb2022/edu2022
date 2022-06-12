import { Injectable } from "@nestjs/common";
import { CreateInternshipReviewDto } from "@modules/internship-reviews/dto/create-internship-review.dto";
import { UpdateInternshipReviewDto } from "@modules/internship-reviews/dto/update-internship-review.dto";

@Injectable()
export class InternshipReviewsService {
  create(createInternshipReviewDto: CreateInternshipReviewDto) {
    return "This action adds a new internshipReview";
  }

  findAll() {
    return `This action returns all internshipReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} internshipReview`;
  }

  update(id: number, updateInternshipReviewDto: UpdateInternshipReviewDto) {
    return `This action updates a #${id} internshipReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} internshipReview`;
  }
}
