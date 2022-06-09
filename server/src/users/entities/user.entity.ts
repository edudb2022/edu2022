import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdmissionOfferReview } from "../../admission-offer-reviews/entities/admission-offer-review.entity";
import { InterviewReview } from "../../interview-reviews/entities/interview-review.entity";
import { ProgramReview } from "../../program-reviews/entities/program-review.entity";
import { SchoolReview } from "../../school-reviews/entities/school-review.entity";

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
