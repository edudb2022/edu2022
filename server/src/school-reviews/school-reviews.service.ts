import { Injectable } from "@nestjs/common";
import { CreateSchoolReviewDto } from "./dto/create-school-review.dto";
import { UpdateSchoolReviewDto } from "./dto/update-school-review.dto";

@Injectable()
export class SchoolReviewsService {
  create(createSchoolReviewDto: CreateSchoolReviewDto) {
    return "This action adds a new schoolReview";
  }

  findAll() {
    return `This action returns all schoolReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolReview`;
  }

  update(id: number, updateSchoolReviewDto: UpdateSchoolReviewDto) {
    return `This action updates a #${id} schoolReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolReview`;
  }
}
