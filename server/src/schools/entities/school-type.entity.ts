import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum SchoolTypeEnum {}

@Entity({ name: "SchoolType" })
export class SchoolType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
