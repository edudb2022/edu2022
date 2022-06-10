import { Column } from "typeorm";

export class LikesDislikes {
  @Column("int")
  likes: number;

  @Column("int")
  dislikes: number;
}
