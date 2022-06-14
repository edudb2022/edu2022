import { IsArray, IsInt, IsString } from "class-validator";

export class CreateSchoolDto {
  @IsInt()
  typeId: number;
  @IsArray({ each: true })
  aliases: string[];
  @IsString()
  chineseName: string;
  @IsString()
  englishName: string;
}
