import Link from "next/link";

export default function TrailerCard({
  name,
  trailerKey,
}: {
  name: string;
  trailerKey: string;
}) {
  return (
    <div className="flex flex-row items-center md:w-[45%]">
      <div className="flex-shrink-0 relative">
        <iframe
          className="w-36 h-24 md:w-72 md:h-48 -z-10"
          aria-disabled
          src={`https://www.youtube.com/embed/${trailerKey}`}
        />
        <Link
          href={`https://www.youtube.com/watch?v=${trailerKey}`}
          target="_blank"
          color="primary"
        >
          <div className="absolute w-36 h-24 md:w-72 md:h-48 top-0 bg-black/5"></div>
        </Link>
      </div>
      <div className="ml-4">
        <h1 className="text-sm md:text-lg font-semibold">{name}</h1>
      </div>
    </div>
  );
}
