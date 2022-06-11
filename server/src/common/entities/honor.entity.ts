import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Honor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
