import { isBrowser } from "./browser";

export const clearLocalStorage = () => isBrowser && localStorage.clear();
