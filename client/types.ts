export type ID = string;
export type UserName = string;
export type SchoolName = string;

export enum Role {
  User = "user",
  Admin = "admin",
}

export interface ISystem {
  user: {
    isLogin: boolean;
    role: Role.User;
    username: UserName;
    userId: ID;
    isVerified: boolean;
  };
}
