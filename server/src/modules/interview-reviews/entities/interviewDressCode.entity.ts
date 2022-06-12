import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum InterviewDressCodeId {
  CASUAL = 1,
  SMART_CASUAL = 2,
  FORMAL = 3,
  FREE = 4,
}

@Entity({ name: "InterviewDressCode" })
export class InterviewDressCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
