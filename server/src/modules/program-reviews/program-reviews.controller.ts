import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProgramReviewsService } from "@modules/program-reviews/program-reviews.service";
import { CreateProgramReviewDto } from "@modules/program-reviews/dto/create-program-review.dto";
import { UpdateProgramReviewDto } from "@modules/program-reviews/dto/update-program-review.dto";

@Controller("program-reviews")
export class ProgramReviewsController {
  constructor(private readonly programReviewsService: ProgramReviewsService) {}

  @Post()
  create(@Body() createProgramReviewDto: CreateProgramReviewDto) {
    return this.programReviewsService.create(createProgramReviewDto);
  }

  @Get()
  findAll() {
    return this.programReviewsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.programReviewsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProgramReviewDto: UpdateProgramReviewDto
  ) {
    return this.programReviewsService.update(+id, updateProgramReviewDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.programReviewsService.remove(+id);
  }
}
