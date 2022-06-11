import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreationAndUpdate, LikesDislikes } from "../../../common/entities";
import { Program } from "../../programs/entities";
import { User } from "../../users/entities";
import { InterviewApplicationType } from "./interviewApplicationType.entity";
import { InterviewDressCode } from "./interviewDressCode.entity";

@Entity()
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
