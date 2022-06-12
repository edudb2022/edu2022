import { Faculty } from "@modules/faculties/entities";
import { SchoolReview } from "@modules/school-reviews/entities";
import { SchoolAlias } from "@modules/schools/entities/school-alias.entity";
import { SchoolType } from "@modules/schools/entities/school-type.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "School" })
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
