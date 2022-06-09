import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { InterviewReviewsService } from "./interview-reviews.service";
import { CreateInterviewReviewDto } from "./dto/create-interview-review.dto";
import { UpdateInterviewReviewDto } from "./dto/update-interview-review.dto";

@Controller("interview-reviews")
export class InterviewReviewsController {
  constructor(
    private readonly interviewReviewsService: InterviewReviewsService
  ) {}

  @Post()
  create(@Body() createInterviewReviewDto: CreateInterviewReviewDto) {
    return this.interviewReviewsService.create(createInterviewReviewDto);
  }

  @Get()
  findAll() {
    return this.interviewReviewsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.interviewReviewsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateInterviewReviewDto: UpdateInterviewReviewDto
  ) {
    return this.interviewReviewsService.update(+id, updateInterviewReviewDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.interviewReviewsService.remove(+id);
  }
}
