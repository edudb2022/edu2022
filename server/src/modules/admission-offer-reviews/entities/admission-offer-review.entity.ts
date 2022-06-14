import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import {
  AdmissionLevel,
  AdmissionLevelId,
} from "@modules/admission-offer-reviews/entities/admission-level.entity";
import {
  AdmissionOfferType,
  AdmissionOfferTypeId,
} from "@modules/admission-offer-reviews/entities/admission-offer-type.entity";
import { Program } from "@modules/programs/entities";
import { User } from "@modules/users/entities";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";

@Entity({ name: "AdmissionOfferReview" })
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
  offerType: AdmissionOfferType;

  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("tinyint")
  anonymous: boolean;

  @Column()
  @RelationId((review: AdmissionOfferReview) => review.program)
  programId: number;
  @Column()
  @RelationId((review: AdmissionOfferReview) => review.user)
  userId: number;
  @Column()
  @RelationId((review: AdmissionOfferReview) => review.admissionLevel)
  admissionLevelId: AdmissionLevelId;
  @Column()
  @RelationId((review: AdmissionOfferReview) => review.offerType)
  offerTypeId: AdmissionOfferTypeId;
}
