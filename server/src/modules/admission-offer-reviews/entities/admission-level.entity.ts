import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum AdmissionLevelId {
  YEAR_ONE = 1,
  YEAR_TWO = 2,
  YEAR_THREE = 3,
  YEAR_FOUR = 4,
  YEAR_FIVE_PLUS = 5,
}

@Entity({ name: "AdmissionLevel" })
export class AdmissionLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
