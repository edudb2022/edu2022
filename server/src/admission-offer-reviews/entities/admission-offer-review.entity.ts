import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Program } from "../../programs/entities/program.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
export class AdmissionOfferReview {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Program, program => program.admissionOfferReviews)
  program: Program;
  @ManyToOne(() => User, user => user.admissionOfferReviews)
  user: User;
}
