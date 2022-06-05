import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SchoolsModule } from "./schools/schools.module";

@Module({
  imports: [ConfigModule.forRoot(), SchoolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
