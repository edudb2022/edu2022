import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import { Honor } from "@common/entities/honor.entity";
import { Industry } from "@common/entities/jobs/industry.entity";
import { JobPostSource } from "@common/entities/jobs/job-post-source.entity";
import { Program } from "@modules/programs/entities";
import { User } from "@modules/users/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GradJobReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Program, program => program.programReviews)
  program: Program;
  @ManyToOne(() => User, user => user.programReviews)
  user: User;

  @ManyToOne(() => Industry)
  industry: Industry;
  @ManyToOne(() => JobPostSource)
  jobPostSource: JobPostSource;
  @ManyToOne(() => Honor)
  honor: Honor;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("varchar", { length: 255 })
  jobTitle: string;
  @Column("timestamp")
  offerReceiveDate: Date;
  @Column("int")
  annualSalary: number;
  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;
  @Column("tinyint")
  anonymous: boolean;
}
