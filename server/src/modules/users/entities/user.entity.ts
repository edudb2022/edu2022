import { AdmissionOfferReview } from "@modules/admission-offer-reviews/entities";
import { InterviewReview } from "@modules/interview-reviews/entities";
import { ProgramReview } from "@modules/program-reviews/entities";
import { SchoolReview } from "@modules/school-reviews/entities";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
