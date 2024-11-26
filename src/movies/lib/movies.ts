import { MovieResult, MoviesResponse } from "../interfaces/movies.response";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(
  endpoint: string,
  page = 1
): Promise<MovieResult[]> {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&page=${page}&language=es=AR`;
  const response = await fetch(url);
  const data: MoviesResponse = await response.json();

  if (!data.results) {
    console.error("Error: la respuesta de la API no contiene results");
    return [];
  }

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    genre_ids: movie.genre_ids,
  }));
}

export async function getTopMovies(): Promise<MovieResult[]> {
  return fetchMovies("/movie/top_rated", 1);
}

export async function getUpcomingMovies(): Promise<MovieResult[]> {
  return fetchMovies("/movie/upcoming", 1);
}

export async function getNowPlayingMovies(): Promise<MovieResult[]> {
  return fetchMovies("/movie/now_playing", 1);
}

export async function getPopularMovies(): Promise<MovieResult[]> {
  return fetchMovies("/movie/popular", 1);
}
