import { AppDispatch } from "../../state/store"
import { useAppDispatch as useReduxDispatch } from "react-redux"

export const useAppDispatch: () => AppDispatch = useReduxDispatch
