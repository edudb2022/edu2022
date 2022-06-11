import { SchoolDto } from "@modules/schools/dto/school.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { CreateSchoolDto } from "@modules/schools/dto/create-school.dto";
import { UpdateSchoolDto } from "@modules/schools/dto/update-school.dto";
import { SchoolsService } from "@modules/schools/schools.service";

@Controller("schools")
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get()
  @ApiOkResponse({
    type: SchoolDto,
    isArray: true,
  })
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.schoolsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.schoolsService.remove(+id);
  }
}
