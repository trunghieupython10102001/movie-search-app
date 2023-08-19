import { MOVIE_API_KEY } from "./constant";

export interface SearchParams {
  title: string;
  type?: MovieType;
  page?: number;
}

export enum MovieType {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}

export const search = async ({ title, type, page }: SearchParams) => {
  const res = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=${MOVIE_API_KEY}&page=${
      page ?? ""
    }&type=${type ?? ""}`
  );
  return res;
};
