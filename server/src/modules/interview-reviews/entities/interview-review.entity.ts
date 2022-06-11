import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import { InterviewApplicationType } from "@modules/interview-reviews/entities/interviewApplicationType.entity";
import { InterviewDressCode } from "@modules/interview-reviews/entities/interviewDressCode.entity";
import { Program } from "@modules/programs/entities";
import { User } from "@modules/users/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "InterviewReview" })
export class InterviewReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Program, program => program.interviewReviews)
  program: Program;
  @ManyToOne(() => User, user => user.interviewReviews)
  user: User;

  @ManyToOne(
    () => InterviewDressCode,
    interviewDressCode => interviewDressCode.id
  )
  dressCode: InterviewDressCode;
  @ManyToOne(
    () => InterviewApplicationType,
    interviewApplicationType => interviewApplicationType.id
  )
  applicationType: InterviewApplicationType;

  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("timestamp")
  interviewDate: Date;
  @Column("tinyint")
  anonymous: boolean;
}
