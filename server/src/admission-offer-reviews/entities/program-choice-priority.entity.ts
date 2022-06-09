import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ProgramChoicePriorityEnum {
  BAND_A = 1,
  BAND_B = 2,
  BAND_C = 3,
}

@Entity()
export class ProgramChoicePriority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
