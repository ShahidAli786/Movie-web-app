import Banner from "@/components/banner";

import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "./action";

import HorizonalMoviesList from "@/components/horizonal-movies-list";
import Carousel from "@/components/carousel";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default async function Home() {
  const res = await fetchNowPlayingMovies(1);
  const responseTopRatedMovies = await fetchTopRatedMovies(1);
  const responsePopularMovies = await fetchPopularMovies(1);
  const responseUpcomingMovies = await fetchUpcomingMovies(1);

  const movies: Movie[] = res?.results;

  const carouselItems = movies.map((movie: Movie) => (
    <div key={movie.id}>
      <Banner {...movie} />
    </div>
  ));

  return (
    <main>
      <Carousel items={carouselItems} />

      <div className="px-4 md:px-28 py-8">
        <HorizonalMoviesList title="Now Playing" movies={res?.results} />
        <HorizonalMoviesList
          title="Top Rated"
          movies={responseTopRatedMovies?.results}
        />
        <HorizonalMoviesList
          title="Popular"
          movies={responsePopularMovies?.results}
        />
        <HorizonalMoviesList
          title="Upcoming"
          movies={responseUpcomingMovies?.results}
        />
      </div>
    </main>
  );
}
