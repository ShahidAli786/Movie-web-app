"use server";

const API_KEY = process.env.API_KEY;
export const fetchNowPlayingMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};
// fetch popular movies
export const fetchPopularMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};
// fetch top rated movies
export const fetchTopRatedMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};
// fetch upcoming movies
export const fetchUpcomingMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchMovie = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1f54bd990f1cdfb230adb312546d765d&append_to_response=casts,images,videos`
  );
  const data = await response.json();
  return data;
};

export const fetchTrailers = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`
  );
  const data = await response.json();
  return data;
};

// fetch the cast of the movie
export const fetchCastCharacters = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`
  );
  const data = await response.json();
  return data;
};
