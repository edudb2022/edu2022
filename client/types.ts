export type ID = string;
export type Username = string;

export enum Role {
  User = "user",
  Admin = "admin",
}

export interface ISystem {
  user: {
    isLogin: boolean;
    role: Role.User;
    username: Username;
    userId: ID;
    isVerified: boolean;
  };
}
