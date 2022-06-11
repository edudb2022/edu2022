import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum AdmissionOfferTypeEnum {
  CONDITIONAL = 1,
  DIRECT = 2,
}

@Entity({ name: "AdmissionOfferType" })
export class AdmissionOfferType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  displayText: string;
}
