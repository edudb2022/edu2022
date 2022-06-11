import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobPostSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
