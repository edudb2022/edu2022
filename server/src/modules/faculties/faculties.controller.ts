import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FacultiesService } from "@modules/faculties/faculties.service";
import { CreateFacultyDto } from "@modules/faculties/dto/create-faculty.dto";
import { UpdateFacultyDto } from "@modules/faculties/dto/update-faculty.dto";

@Controller("faculties")
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);
  }

  @Get()
  findAll() {
    return this.facultiesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.facultiesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.update(+id, updateFacultyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.facultiesService.remove(+id);
  }
}
