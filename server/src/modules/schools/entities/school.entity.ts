import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Faculty } from "../../faculties/entities";
import { SchoolReview } from "../../school-reviews/entities";
import { SchoolAlias } from "./school-alias.entity";
import { SchoolType } from "./school-type.entity";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SchoolType, schoolType => schoolType.id)
  type: SchoolType;

  @OneToMany(() => SchoolAlias, schoolAlias => schoolAlias.school)
  aliases: string[];
  @OneToMany(() => Faculty, faculty => faculty.school)
  faculties: Faculty[];
  @OneToMany(() => SchoolReview, schoolReview => schoolReview.school)
  reviews: SchoolReview[];

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
