import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FacultiesModule } from "./faculties/faculties.module";
import { SchoolsModule } from "./schools/schools.module";

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
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    SchoolsModule,
    FacultiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
