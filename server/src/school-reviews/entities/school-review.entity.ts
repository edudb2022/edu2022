import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreationAndUpdate } from "../../embedded-entities/creation-and-update";
import { LikesDislikes } from "../../embedded-entities/likes-dislikes.entity";
import { School } from "../../schools/entities/school.entity";
import { User } from "../../users/entities/user.entity";

@Entity({ name: "SchoolReview" })
export class SchoolReview {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO - Make school and user unique fields
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
