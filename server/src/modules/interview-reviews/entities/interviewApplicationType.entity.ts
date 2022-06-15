import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum InterviewApplicationTypeId {
  JUPAS = 1,
  NON_JUPAS = 2,
}

@Entity({ name: "InterviewApplicationType" })
export class InterviewApplicationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}