import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum AdmissionOfferTypeId {
  CONDITIONAL = 1,
  DIRECT = 2,
}

@Entity({ name: "AdmissionOfferType" })
export class AdmissionOfferType {
  @PrimaryGeneratedColumn()
  id: AdmissionOfferTypeId;

  @Column("varchar", { length: 255 })
  displayText: string;
}
