import { AppDispatch } from "../../state/store"
import { useDispatch as useReduxDispatch } from "react-redux"

export const useAppDispatch: () => AppDispatch = useReduxDispatch
