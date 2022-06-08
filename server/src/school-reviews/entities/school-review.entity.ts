import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @Column("varchar", { length: 255 })
  title: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("year")
  admissionYear: number;

  @Column("int")
  likes: number;

  @Column("int")
  dislikes: number;

  @Column("tinyint")
  anonymous: boolean;
}
