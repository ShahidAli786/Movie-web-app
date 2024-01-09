import { fetchTrailers } from "@/app/action";
import { Button, Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function Banner(movie: Movie) {
  const responseTrailers: TrailersResponse = await fetchTrailers(
    Number(movie.id)
  );

  const trailer = responseTrailers?.results.find(
    (trailer) => trailer.type === "Trailer"
  );

  const posterUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
  const backgroundUrl = `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`;

  return (
    <div
      className="h-56 md:h-[70vh] relative bg-cover"
      style={{
        backgroundImage: backgroundUrl,

        width: "100%",
      }}
    >
      <div className="flex bg-gradient-to-l from-slate-500/30 to-black h-full items-center px-4 md:px-24">
        <Image
          isBlurred
          alt="Card background"
          className="object-cover rounded w-36 h-[10rem] md:w-64 md:h-[22rem]"
          src={posterUrl}
        />

        {/* add movie title ratings and description about the movie and genre badge*/}
        <div className="flex flex-col ml-3 md:ml-8 max-w-[30rem] gap-2 md:gap-4">
          <h1 className="text-sm md:text-4xl font-bold text-white">
            {movie.title}
          </h1>
          <p className="text-white text-xs md:text-xl md:w-auto w-40 line-clamp-2 md:line-clamp-none md:h-auto h-8 overflow-hidden">
            {movie.overview}
          </p>
          <div className="flex items-center gap-2">
            <Chip
              color="success"
              variant="flat"
              className="text-[10px] md:text-sm"
            >
              IMDB {movie?.vote_average?.toFixed(1)}
            </Chip>
          </div>
          <div className="flex items-center gap-2">
            {trailer && (
              <Button
                as={Link}
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                color="primary"
              >
                Play trailer
              </Button>
            )}
            <Button as={Link} href={`/movie/${movie.id}`}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
