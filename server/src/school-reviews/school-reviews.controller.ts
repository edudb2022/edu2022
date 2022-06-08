import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolReviewsService } from './school-reviews.service';
import { CreateSchoolReviewDto } from './dto/create-school-review.dto';
import { UpdateSchoolReviewDto } from './dto/update-school-review.dto';

@Controller('school-reviews')
export class SchoolReviewsController {
  constructor(private readonly schoolReviewsService: SchoolReviewsService) {}

  @Post()
  create(@Body() createSchoolReviewDto: CreateSchoolReviewDto) {
    return this.schoolReviewsService.create(createSchoolReviewDto);
  }

  @Get()
  findAll() {
    return this.schoolReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolReviewDto: UpdateSchoolReviewDto) {
    return this.schoolReviewsService.update(+id, updateSchoolReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolReviewsService.remove(+id);
  }
}
