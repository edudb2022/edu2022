import { Module } from "@nestjs/common";
import { FacultiesService } from "@modules/faculties/faculties.service";
import { FacultiesController } from "@modules/faculties/faculties.controller";

@Module({
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
