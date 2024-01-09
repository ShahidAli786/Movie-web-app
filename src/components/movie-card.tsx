import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { MotionDiv } from "./motion-div";

type MovieCardProps = Partial<Movie> & {
  index: number;
};
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function MovieCard({ index, ...props }: MovieCardProps) {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        bounce: 0.5,
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      variants={variants}
      className="rounded min-w-36 min-h-48 md:min-w-48 md:min-h-60 overflow-hidden cursor-pointer"
    >
      <Image
        as={NextImage}
        fill
        priority
        alt="Card background"
        className="object-cover rounded min-w-36 min-h-48 md:min-w-48 md:min-h-60  "
        src={`https://image.tmdb.org/t/p/w342/${props.poster_path}`}
      />
    </MotionDiv>
  );
}
