import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AdmissionOfferReview } from "../../admission-offer-reviews/entities/admission-offer-review.entity";
import { Faculty } from "../../faculties/entities/faculty.entity";
import { InterviewReview } from "../../interview-reviews/entities/interview-review.entity";
import { ProgramReview } from "../../program-reviews/entities/program-review.entity";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faculty, faculty => faculty.programs)
  faculty: Faculty;

  @OneToMany(() => ProgramReview, programReview => programReview.program)
  programReviews: ProgramReview[];
  @OneToMany(() => InterviewReview, interviewReview => interviewReview.program)
  interviewReviews: InterviewReview[];
  @OneToMany(
    () => AdmissionOfferReview,
    admissionOfferReview => admissionOfferReview.program
  )
  admissionOfferReviews: AdmissionOfferReview[];

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;
}
