import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import { AdmissionLevel } from "@modules/admission-offer-reviews/entities/admission-level.entity";
import { AdmissionOfferType } from "@modules/admission-offer-reviews/entities/admisson-offer-type.entity";
import { Program } from "@modules/programs/entities";
import { User } from "@modules/users/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
