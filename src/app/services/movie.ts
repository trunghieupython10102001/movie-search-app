import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const initialState: { movies: Movie[] } = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = [...action.payload];
    },
  },
});
export const getMovies = (state: RootState) => state.movies.movies;

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
