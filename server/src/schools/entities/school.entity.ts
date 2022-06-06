import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SchoolTypeEnum } from "./entity.types";
import { SchoolAlias } from "./schoolAlias.entity";
import { SchoolType } from "./schoolType.entity";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SchoolType, schoolType => schoolType.id)
  type: SchoolTypeEnum;

  @OneToMany(() => SchoolAlias, schoolAlias => schoolAlias.school)
  aliases: string[];

  @Column({
    type: "varchar",
    length: 255,
  })
  chinese_name: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  english_name: string;
}
