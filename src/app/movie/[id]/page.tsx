import { fetchMovie, fetchTrailers } from "@/app/action";
import Carousel from "@/components/carousel";
import MainTabs from "@/components/main-tabs";

import { Chip, Image } from "@nextui-org/react";

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetails({ params }: PostPageProps) {
  const response: MovieResponse = await fetchMovie(Number(params.id));
  const responseTrailers: TrailersResponse = await fetchTrailers(
    Number(params.id)
  );

  const carouselItems = response?.images?.backdrops?.map((backdrop) => (
    <div
      key={backdrop.id}
      className="h-56 md:h-[90vh] bg-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop.file_path})`,
        width: "100%",
      }}
    />
  ));
  // complete movie details page here
  return (
    <div>
      <div className="relative">
        <Carousel autoplayInterval={3000} items={carouselItems} />
      </div>
      <div className="absolute w-screen top-14 h-60  md:h-screen md:top-0 bg-black/65 flex items-center px-4 md:px-32 gap-4 md:gap-10">
        <div className="flex rounded items-center">
          <Image
            alt="Card background"
            srcSet={`https://image.tmdb.org/t/p/w154/${response.poster_path},
            https://image.tmdb.org/t/p/w185/${response.poster_path},
              https://image.tmdb.org/t/p/w342/${response.poster_path}`}
            className="rounded w-36 h-48 md:w-[300px] md:h-[400px]"
            src={`https://image.tmdb.org/t/p/w342/${response.poster_path}`}
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 max-w-52 md:max-w-[500px]">
          <h1 className="text-medium md:text-3xl font-bold ">
            {response.title}
          </h1>
          <p className="text-white text-xs md:text-xl md:w-auto w-40 line-clamp-2 md:line-clamp-none md:h-auto h-8 overflow-hidden">
            {response.overview}
          </p>
          <div className="flex items-center gap-2">
            {response?.genres?.slice(0, 2).map((genre) => (
              <Chip
                key={genre.id}
                variant="bordered"
                color="default"
                className="text-xs md:text-md"
              >
                {genre.name}
              </Chip>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="yellow"
              role="presentation"
            >
              <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
            </svg>
            <p className="text-sm text-white">{response.vote_average}</p>
          </div>
          <div className="flex items-center gap-2">
            <Chip
              variant="solid"
              color="danger"
              className="text-xs md:text-md rounded text-white"
            >
              {response.release_date}
            </Chip>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col px-0 md:px-24 pt-10 md:pt-12">
        <MainTabs movie={response} trailers={responseTrailers} />
      </div>
    </div>
  );
}
