import { Avatar } from "@nextui-org/react";

type Props = {
  name: string;
  character: string;
  profile_path: string;
};

export default function CastCard({ character, name, profile_path }: Props) {
  return (
    <div className="flex flex-row items-center md:w-80">
      <div className="flex-shrink-0">
        <Avatar
          name={name.split("")[0]}
          showFallback
          size="lg"
          className="h-20 w-20"
          src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
        />
      </div>
      <div className="ml-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-gray-400">as {character}</p>
      </div>
    </div>
  );
}
