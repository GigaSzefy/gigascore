import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiFootball } from "../services/api/api-football";
import { LeagueData } from "../types/standings";
import { AppThunk, RootState } from "../app/store";
import { PlayerStats } from "../types/TopScorers";

interface StandingsState {
  standings: LeagueData[];
  topscorers: PlayerStats[];
}

const initialState: StandingsState = {
  standings: [],
  topscorers: [],
};

export const getStandingsAsync = createAsyncThunk(
  "standings/fetchstandings",
  async (leagueId: number) => {
    const standings = await ApiFootball.getStandings(leagueId, 2022);
    return standings;
  }
);

export const getTopscorersAsync = createAsyncThunk(
  "topscorers/fetchtopscorers",
  async (leagueId: number) => {
    const topscorers = await ApiFootball.getLeagueTopScorers(leagueId, 2022);
    return topscorers;
  }
);

export const standingsSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStandingsAsync.fulfilled, (state, action) => {
        state.standings = action.payload || [];
      })
      .addCase(getTopscorersAsync.fulfilled, (state, action) => {
        state.topscorers = action.payload || [];
      });
  },
});

export const selectStandings = (state: RootState) => state.standings.standings;
export const selectTopScorers = (state: RootState) =>
  state.standings.topscorers;

export default standingsSlice.reducer;
