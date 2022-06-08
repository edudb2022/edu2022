import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Faculty } from "../../faculties/entities/faculty.entity";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.programs)
  faculty: Faculty;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
