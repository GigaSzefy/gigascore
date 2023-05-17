import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import standingsReducer from "../slices/standings-slice";
import newsReducer from "../slices/news-slice";
import fixturesReducer from "../slices/liveMatches-slice"

export const store = configureStore({
  reducer: {
    standings: standingsReducer,
    news: newsReducer,
    fixtures: fixturesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
