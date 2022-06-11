import { CreationAndUpdate, LikesDislikes } from "@common/entities";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GradJobReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => CreationAndUpdate, { prefix: false })
  creationAndUpdate: CreationAndUpdate;
  @Column(() => LikesDislikes, { prefix: false })
  likesDislikes: LikesDislikes;

  @Column("varchar", { length: 255 })
  title: string;
  @Column("tinyint")
  anonymous: boolean;
}
