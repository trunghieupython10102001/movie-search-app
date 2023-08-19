import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const initialState: { movies: Movie[]; total: number; page: number } = {
  movies: [],
  total: 0,
  page: 1,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = [...action.payload];
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    nextPage(state, action: PayloadAction<number>) {
      if (state.page < state.total / 10) {
        state.page += action.payload;
      }
    },
    prevPage(state, action: PayloadAction<number>) {
      if (state.page > 1) {
        state.page -= action.payload;
      }
    },
  },
});

export const getMovies = (state: RootState) => state.movies.movies;
export const getTotal = (state: RootState) => state.movies.total;
export const getpage = (state: RootState) => state.movies.page;

export const { setMovies, setTotal, nextPage, prevPage } = moviesSlice.actions;

export default moviesSlice.reducer;
