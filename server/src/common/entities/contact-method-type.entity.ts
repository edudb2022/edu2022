import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ContactMethodTypeEnum {
  WHATSAPP = 1,
  EMAIL,
}

@Entity({ name: "ContactMethodType" })
export class ContactMethodType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  name: string;
}
