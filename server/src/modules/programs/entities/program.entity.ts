import { AdmissionOfferReview } from "@modules/admission-offer-reviews/entities";
import { Faculty } from "@modules/faculties/entities";
import { InterviewReview } from "@modules/interview-reviews/entities";
import { ProgramReview } from "@modules/program-reviews/entities";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

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
