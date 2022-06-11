import { Module } from "@nestjs/common";
import { UsersService } from "@modules/users/users.service";
import { UsersController } from "@modules/users/users.controller";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
