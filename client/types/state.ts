// export type ID = string;
// export type UserName = string;
// export type SchoolName = string;

import { ID, Role, UserName } from "./common";

// export enum Role {
//   User = "user",
//   Admin = "admin",
// }

export interface ISystemState {
  isLoading: boolean;
  error: string;
}

export interface IUserState {
  isLogin: boolean;
  role: Role;
  username: UserName;
  userId: ID;
  isVerified: boolean;
}
