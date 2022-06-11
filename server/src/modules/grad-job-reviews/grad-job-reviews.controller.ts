import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { GradJobReviewsService } from "./grad-job-reviews.service";
import { CreateGradJobReviewDto } from "./dto/create-grad-job-review.dto";
import { UpdateGradJobReviewDto } from "./dto/update-grad-job-review.dto";

@Controller("grad-job-reviews")
export class GradJobReviewsController {
  constructor(private readonly gradJobReviewsService: GradJobReviewsService) {}

  @Post()
  create(@Body() createGradJobReviewDto: CreateGradJobReviewDto) {
    return this.gradJobReviewsService.create(createGradJobReviewDto);
  }

  @Get()
  findAll() {
    return this.gradJobReviewsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gradJobReviewsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGradJobReviewDto: UpdateGradJobReviewDto
  ) {
    return this.gradJobReviewsService.update(+id, updateGradJobReviewDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.gradJobReviewsService.remove(+id);
  }
}
