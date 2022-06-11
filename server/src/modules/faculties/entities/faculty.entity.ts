import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Program } from "../../programs/entities";
import { School } from "../../schools/entities";

@Entity()
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
