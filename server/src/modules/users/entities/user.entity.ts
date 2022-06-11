import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdmissionOfferReview } from "../../admission-offer-reviews/entities";
import { InterviewReview } from "../../interview-reviews/entities";
import { ProgramReview } from "../../program-reviews/entities";
import { SchoolReview } from "../../school-reviews/entities";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;

  @OneToMany(() => SchoolReview, schoolReview => schoolReview.user)
  schoolReviews: SchoolReview[];
  @OneToMany(() => ProgramReview, programReview => programReview.user)
  programReviews: ProgramReview[];
  @OneToMany(() => InterviewReview, interviewReview => interviewReview.user)
  interviewReviews: InterviewReview[];
  @OneToMany(
    () => AdmissionOfferReview,
    admissionOfferReview => admissionOfferReview.user
  )
  admissionOfferReviews: AdmissionOfferReview[];
}
