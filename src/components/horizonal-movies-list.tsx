import { Chip } from "@nextui-org/react";
import MovieCard from "./movie-card";
import Link from "next/link";

type HorizonalMoviesListProps = {
  movies: Movie[];
  title: string;
};

export default function HorizonalMoviesList({
  movies,
  title,
}: HorizonalMoviesListProps) {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl md:text-2xl font-semibold ">{title}</h1>
        {/* <Chip color="primary" variant="flat" className="ml-auto">
          View all
        </Chip> */}
      </div>

      <div className="flex overflow-x-scroll gap-4 pb-4 no-scrollbar">
        {movies.map((movie: Movie, index: number) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} prefetch={false}>
            <MovieCard key={movie.id} index={index} {...movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
