import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import standingsReducer from "../slices/standings-slice";



export const store = configureStore({
    reducer: {
        standings: standingsReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;