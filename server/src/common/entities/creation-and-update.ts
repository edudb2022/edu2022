import { Column } from "typeorm";

export class CreationAndUpdate {
  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("timestamp", {
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
