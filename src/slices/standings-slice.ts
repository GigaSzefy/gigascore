import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiFootball } from "../services/api/api-football";
import {LeagueData} from "../types/standings"
import { AppThunk, RootState } from "../app/store";

interface StandingsState {
    standings:LeagueData[];
}

const initialState:StandingsState = {
    standings: []
}

export const getStandingsAsync = createAsyncThunk(
    "standings/fetchstandings",
    async(leagueId:number) => {
        const standings = await ApiFootball.getStandings(leagueId,2022)
        return standings
    }

)

export const standingsSlice = createSlice({
    name:"standings",
    initialState,
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(getStandingsAsync.fulfilled, (state, action) => {
            state.standings = action.payload || [];
        })
    },
})

export const selectStandings = (state:RootState) => state.standings

export default standingsSlice.reducer;


