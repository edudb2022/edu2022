import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum JobPostSourceEnum {
  JIJIS = 1,
  JOBS_DB,
  INDEED,
  OTHER,
}

@Entity({ name: "JobPostSource" })
export class JobPostSource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
