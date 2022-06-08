import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "../../schools/entities/school.entity";

@Entity({ name: "SchoolReview" })
export class SchoolReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => School, school => school.reviews)
  school: School;
}
