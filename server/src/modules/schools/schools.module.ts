import { School, SchoolAlias } from "@modules/schools/entities";
import { SchoolsController } from "@modules/schools/schools.controller";
import { SchoolsService } from "@modules/schools/schools.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([School, SchoolAlias])],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
