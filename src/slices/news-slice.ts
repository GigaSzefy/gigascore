import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article } from "../types/news";
import { apiNews } from "../services/api/api-news";
import { RootState } from "../app/store";

interface NewsState {
  news: Article[];
}

const initialState: NewsState = {
  news: [],
};

export const getNewsAsync = createAsyncThunk("news/fetchnews", async () => {
  const news = await apiNews.getNews();
  return news;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsAsync.fulfilled, (state, action) => {
      state.news = action.payload || [];
    });
  },
});

export const selectNews = (state: RootState) =>
  state.news.news.filter((article) => article.urlToImage);

export default newsSlice.reducer;
