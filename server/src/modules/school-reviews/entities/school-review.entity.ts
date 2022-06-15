import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import { School } from "@modules/schools/entities";
import { User } from "@modules/users/entities";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@Entity({ name: "SchoolReview" })
@Unique(["school", "user"])
export class SchoolReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.reviews)
  school: School;
  @ManyToOne(() => User, user => user.schoolReviews)
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