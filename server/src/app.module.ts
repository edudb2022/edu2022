import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { FacultiesModule } from "./faculties/faculties.module";
import { InterviewReviewsModule } from "./interview-reviews/interview-reviews.module";
import { ProgramReviewsModule } from "./program-reviews/program-reviews.module";
import { ProgramsModule } from "./programs/programs.module";
import { SchoolReviewsModule } from "./school-reviews/school-reviews.module";
import { SchoolsModule } from "./schools/schools.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DATABASE_HOST"),
        port: configService.get("DATABASE_PORT"),
        username: configService.get("DATABASE_USERNAME"),
        password: configService.get("DATABASE_PASSWORD"),
        database: configService.get("DATABASE_NAME"),
        entities: [join(__dirname, "**", "*.entity.{ts,js}")],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    SchoolsModule,
    FacultiesModule,
    ProgramsModule,
    UsersModule,
    SchoolReviewsModule,
    ProgramReviewsModule,
    InterviewReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
