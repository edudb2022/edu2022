import { Program } from "@modules/programs/entities";
import { School } from "@modules/schools/entities";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Faculty" })
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.faculties)
  school: School;

  @OneToMany(() => Program, program => program.faculty)
  programs: Program[];

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
