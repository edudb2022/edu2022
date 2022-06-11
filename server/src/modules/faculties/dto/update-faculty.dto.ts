import { PartialType } from "@nestjs/mapped-types";
import { CreateFacultyDto } from "@modules/faculties/dto/create-faculty.dto";

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {}
