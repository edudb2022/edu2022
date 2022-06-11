import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreationAndUpdate, LikesDislikes } from "../../../common/entities";
import { Program } from "../../programs/entities";
import { User } from "../../users/entities";

@Entity()
export class ProgramReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Program, program => program.programReviews)
  program: Program;
  @ManyToOne(() => User, user => user.programReviews)
  user: User;

  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("year")
  admissionYear: number;
  @Column("tinyint")
  anonymous: boolean;
}
