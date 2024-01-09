"use client";
import { Tab, Tabs } from "@nextui-org/react";
import CastCard from "./cast-card";
import TrailerCard from "./trailer-card";

type RowItemProps = {
  title: string;
  value: string | number;
};
function RowItem({ title, value }: RowItemProps) {
  return (
    <div className="flex flex-row justify-between">
      <p className="font-semibold">{title}</p>
      <p>{value}</p>
    </div>
  );
}
export default function MainTabs({
  movie,
  trailers,
}: {
  movie: MovieResponse;
  trailers: TrailersResponse;
}) {
  return (
    <Tabs aria-label="Options" color="primary" variant="underlined" fullWidth>
      <Tab
        className="text-medium md:text-2xl py-5 px-5  "
        key="photos"
        title="Info"
      >
        <div className="flex flex-col gap-4 px-2 md:px-4 md:pt-10">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Overview</p>
            <p>{movie?.overview}</p>
          </div>

          <RowItem title="Status" value={movie?.status} />
          <RowItem title="Language" value={movie?.original_language} />
          <RowItem title="Release Date" value={movie?.release_date} />
          <RowItem title="Budget" value={movie?.budget} />
        </div>
      </Tab>
      <Tab
        className="text-medium md:text-2xl py-5 px-5 "
        key="music"
        title="Casts"
      >
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:gap-8 md:pt-10 gap-4 px-2 md:px-4">
          {movie?.casts?.cast?.map((cast: Cast) => (
            <CastCard
              key={cast.id}
              character={cast.character}
              name={cast.original_name}
              profile_path={cast.profile_path}
            />
          ))}
        </div>
      </Tab>
      <Tab
        className="text-medium md:text-2xl py-5 px-5 "
        key="videos"
        title="Trailers"
      >
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:gap-8 md:pt-10 gap-4 px-2 md:px-4">
          {trailers?.results?.map((trailer: Trailer) => (
            <TrailerCard
              key={trailer.key}
              name={trailer.name}
              trailerKey={trailer.key}
            />
          ))}
        </div>
      </Tab>
    </Tabs>
  );
}
