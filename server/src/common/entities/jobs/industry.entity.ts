import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Industry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayText: string;
}
