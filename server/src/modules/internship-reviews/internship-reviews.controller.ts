import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { InternshipReviewsService } from "@modules/internship-reviews/internship-reviews.service";
import { CreateInternshipReviewDto } from "@modules/internship-reviews/dto/create-internship-review.dto";
import { UpdateInternshipReviewDto } from "@modules/internship-reviews/dto/update-internship-review.dto";

@Controller("internship-reviews")
export class InternshipReviewsController {
  constructor(
    private readonly internshipReviewsService: InternshipReviewsService
  ) {}

  @Post()
  create(@Body() createInternshipReviewDto: CreateInternshipReviewDto) {
    return this.internshipReviewsService.create(createInternshipReviewDto);
  }

  @Get()
  findAll() {
    return this.internshipReviewsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.internshipReviewsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateInternshipReviewDto: UpdateInternshipReviewDto
  ) {
    return this.internshipReviewsService.update(+id, updateInternshipReviewDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.internshipReviewsService.remove(+id);
  }
}
