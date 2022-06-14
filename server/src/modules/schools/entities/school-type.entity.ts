import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum SchoolTypeId {}

@Entity({ name: "SchoolType" })
export class SchoolType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
