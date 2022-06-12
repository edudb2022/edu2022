import { PartialType } from "@nestjs/mapped-types";
import { CreateProgramDto } from "@modules/programs/dto/create-program.dto";

export class UpdateProgramDto extends PartialType(CreateProgramDto) {}
