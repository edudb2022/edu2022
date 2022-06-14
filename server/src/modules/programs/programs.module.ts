import { Module } from "@nestjs/common";
import { ProgramsService } from "@modules/programs/programs.service";
import { ProgramsController } from "@modules/programs/programs.controller";

@Module({
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}
