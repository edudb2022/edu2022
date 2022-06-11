import { GradJobReviewsModule } from "@modules/grad-job-reviews/grad-job-reviews.module";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AdmissionOfferReviewsModule } from "@modules/admission-offer-reviews/admission-offer-reviews.module";
import { FacultiesModule } from "@modules/faculties/faculties.module";
import { InterviewReviewsModule } from "@modules/interview-reviews/interview-reviews.module";
import { ProgramReviewsModule } from "@modules/program-reviews/program-reviews.module";
import { ProgramsModule } from "@modules/programs/programs.module";
import { SchoolReviewsModule } from "@modules/school-reviews/school-reviews.module";
import { SchoolsModule } from "@modules/schools/schools.module";
import { UsersModule } from "@modules/users/users.module";

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
    AdmissionOfferReviewsModule,
    GradJobReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
