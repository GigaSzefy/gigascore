import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article } from "../types/news";
import { apiNews } from "../services/api/api-news";
import { RootState } from "../app/store";

interface NewsState {
  news: Article[];
  customNews: Article[];
}

const initialState: NewsState = {
  news: [],
  customNews: [],
};

export const getNewsAsync = createAsyncThunk("news/fetchnews", async () => {
  const news = await apiNews.getNews();
  return news;
});

export const getCustomNewsAsync = createAsyncThunk(
  "customNews/fetchcustomNews",
  async (keyword: string) => {
    const customNews = await apiNews.getCustomNews(keyword);
    return customNews;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsAsync.fulfilled, (state, action) => {
        state.news = action.payload || [];
      })
      .addCase(getCustomNewsAsync.fulfilled, (state, action) => {
        state.customNews = action.payload || [];
      });
  },
});

export const selectNews = (state: RootState) =>
  state.news.news.filter((article) => article.urlToImage);
export const selectCustomNews = (state: RootState) =>
  state.news.customNews.filter((article) => article.urlToImage);

export default newsSlice.reducer;
