import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreationAndUpdate } from "../../embedded-entities/creation-and-update";
import { LikesDislikes } from "../../embedded-entities/likes-dislikes.entity";
import { Program } from "../../programs/entities/program.entity";
import { User } from "../../users/entities/user.entity";
import { AdmissionLevel } from "./admission-level.entity";
import { AdmissionOfferType } from "./admisson-offer-type.entity";

@Entity()
export class AdmissionOfferReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Program, program => program.admissionOfferReviews)
  program: Program;
  @ManyToOne(() => User, user => user.admissionOfferReviews)
  user: User;

  @ManyToOne(() => AdmissionLevel, admissionLevel => admissionLevel.id)
  admissionLevel: AdmissionLevel;
  @ManyToOne(
    () => AdmissionOfferType,
    admissionOfferType => admissionOfferType.id
  )
  admissionOfferType: AdmissionOfferType;

  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("tinyint")
  anonymous: boolean;
}
