import { rootReducer } from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({ reducer: rootReducer })
export type AppDispatch = typeof store.dispatch
