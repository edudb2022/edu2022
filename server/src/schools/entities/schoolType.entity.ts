import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SchoolTypeEnum } from "./entity.types";

@Entity()
export class SchoolType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: SchoolTypeEnum;
}
