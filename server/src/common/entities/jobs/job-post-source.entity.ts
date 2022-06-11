import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum JobPostSourceEnum {
  JIJIS = 1,
  JOBS_DB,
  INDEED,
  OTHER,
}

@Entity()
export class JobPostSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
