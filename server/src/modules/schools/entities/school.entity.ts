import { Faculty } from "@modules/faculties/entities";
import { SchoolReview } from "@modules/school-reviews/entities";
import { SchoolAlias } from "@modules/schools/entities/school-alias.entity";
import {
  SchoolType,
  SchoolTypeId,
} from "@modules/schools/entities/school-type.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";

@Entity({ name: "School" })
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SchoolType, schoolType => schoolType.id)
  type: SchoolType;

  @OneToMany(() => SchoolAlias, schoolAlias => schoolAlias.school)
  aliases: SchoolAlias[];
  @OneToMany(() => Faculty, faculty => faculty.school)
  faculties: Faculty[];
  @OneToMany(() => SchoolReview, schoolReview => schoolReview.school)
  reviews: SchoolReview[];

  @Column({
    type: "varchar",
    length: 255,
  })
  chineseName: string;
  @Column({
    type: "varchar",
    length: 255,
  })
  englishName: string;

  @Column()
  @RelationId((school: School) => school.type)
  typeId: SchoolTypeId;
}
