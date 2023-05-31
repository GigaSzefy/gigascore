import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LiveMatchesType } from '../types/liveMatches';
import { ApiFootball } from '../services/api/api-football';
import { RootState } from '../app/store';

interface MatchesState {
	liveMatches: LiveMatchesType[];
	leagueliveMatches: LiveMatchesType[];
}

const initialState: MatchesState = {
	liveMatches: [],
	leagueliveMatches: []
};

export const getFixturesAsync = createAsyncThunk(
	'liveMatches/ fetch fixtures',
	async () => {
		const fixtures = await ApiFootball.getLiveMatches();
		return fixtures;
	}
);

export const getLeagueResultAsync = createAsyncThunk(
	'leagueLiveMatches / fetch leaguefixtures',
	async (leagueId:number) => {
		const leagueresults = await ApiFootball.getLeagueLastMatches(leagueId);
		
		return leagueresults
	}
)

export const fixturesSlice = createSlice({
	name: 'fixtures',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFixturesAsync.fulfilled, (state, action) => {
			state.liveMatches = action.payload || [];
			
		})
		.addCase(getLeagueResultAsync.fulfilled, (state, action) => {
			state.leagueliveMatches = action.payload || [];
		})
	},
});

export const selectFixtures = (state: RootState) => state.fixtures.liveMatches;
export const selectLeagueResult = (state:RootState) => state.fixtures.leagueliveMatches;
export default fixturesSlice.reducer;
