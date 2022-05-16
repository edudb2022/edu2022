import system from "../system/actions";

import user from "../user/actions";

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
