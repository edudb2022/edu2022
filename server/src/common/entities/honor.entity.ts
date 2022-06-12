import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum HonorId {
  FIRST = 1,
  SECOND_UP,
  SECOND_LOW,
  THIRD,
}

@Entity({ name: "Honor" })
export class Honor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
