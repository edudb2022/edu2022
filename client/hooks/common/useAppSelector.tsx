import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { IRootState } from "../../state/reducer";

export const useAppSelector: TypedUseSelectorHook<IRootState> =
  useReduxSelector;
