import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LiveMatchesType } from '../types/liveMatches';
import { ApiFootball } from '../services/api/api-football';
import { RootState } from '../app/store';

interface MatchesState {
	liveMatches: LiveMatchesType[];
}

const initialState: MatchesState = {
	liveMatches: [],
};

export const getFixturesAsync = createAsyncThunk(
	'liveMatches/ fetch fixtures',
	async () => {
		const fixtures = await ApiFootball.getLiveMatches();
		return fixtures;
	}
);

export const fixturesSlice = createSlice({
	name: 'fixtures',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFixturesAsync.fulfilled, (state, action) => {
			state.liveMatches = action.payload || [];
		});
	},
});

export const selectFixtures = (state: RootState) => state.fixtures.liveMatches;
export default fixturesSlice.reducer;
