import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "../../schools/entities/school.entity";

export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.faculties)
  school: School;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
