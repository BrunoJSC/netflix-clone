import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import MovieButtons from "./MovieButtons";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });

  return data;
}

export default async function MovieVideo() {
  const data = await getData();
  return (
    <div className="h-[55vh] w-full items-center justify-start lg:h-[60vh]">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="absolute left-0 top-0 -z-10 h-[60vh] w-full object-cover brightness-[60%]"
      ></video>

      <div className="absolute mx-auto w-[90%] lg:w-[40%]">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {data?.title}
        </h1>

        <p className="mt-5 line-clamp-3  text-lg text-white">
          {data?.overview}
        </p>

        <div className="mt-4 flex gap-x-3">
          <MovieButtons
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}
