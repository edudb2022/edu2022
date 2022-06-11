import { Module } from "@nestjs/common";
import { SchoolsService } from "@modules/schools/schools.service";
import { SchoolsController } from "@modules/schools/schools.controller";

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
