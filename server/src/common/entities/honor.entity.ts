import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum HonorEnum {
  FIRST = "FIRST",
  SECOND_UP = "SECOND_UP",
  SECOND_LOW = "SECOND_LOW",
  THIRD = "THIRD",
}

@Entity()
export class Honor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
