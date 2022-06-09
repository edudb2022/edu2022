import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Faculty } from "../../faculties/entities/faculty.entity";
import { ProgramReview } from "../../program-reviews/entities/program-review.entity";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.programs)
  faculty: Faculty;

  @OneToMany(() => ProgramReview, programReview => programReview.program)
  reviews: ProgramReview[];

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
