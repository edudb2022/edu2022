import { PartialType } from "@nestjs/mapped-types";
import { CreateSchoolDto } from "@modules/schools/dto/create-school.dto";

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {}
