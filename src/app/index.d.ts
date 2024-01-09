interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  genres: Genre[];
}
interface Genre {
  id: number;
  name: string;
}

interface MoviesResponse {
  total_results: number;
  total_pages: number;
  results: Movie[];
}

// trailers interface
interface Trailer {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
interface TrailersResponse {
  id: number;
  results: Trailer[];
}

interface Cast {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  character: string;
}
interface CastResponse {
  id: number;
  cast: Cast[];
}

interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface BackDrops {
  file_path: string;
  height: number;
  id: string;
}
interface Images {
  backdrops: BackDrops[];
}
interface MovieResponse {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  production_companies: ProductionCompanies[];
  runtime: number;
  tagline: string;
  videos: TrailersResponse;
  casts: CastResponse;
  images: Images;
  budget: number;
  status: string;
  original_language: string;
}
