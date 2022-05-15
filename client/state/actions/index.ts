import system from "../system/actions";
import { ISystemActions } from "../system/types";
import user from "../user/actions";
import { IUserActions } from "../user/types";

const rootActions = {
  system,
  user,
};

export default rootActions;

// // export type IRootActions {
// //   ISystemActions,
// //   IUserActions,
// // }

// export const IRootActions = { ...ISystemActions, ...IUserActions };
// export type IRootActions = typeof IRootActions;
