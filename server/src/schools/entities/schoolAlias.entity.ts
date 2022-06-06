import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "./school.entity";

@Entity()
export class SchoolAlias {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.id)
  school: School;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
