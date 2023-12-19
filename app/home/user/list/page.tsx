import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
}

export default async function Watchlist() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <>
      <h1 className="mt-10 px-5 text-4xl font-bold text-white underline sm:px-0">
        Your watchlist
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {data.map((movie) => (
          <div key={movie.Movie?.id} className="relative h-60">
            <Image
              src={movie.Movie?.imageString as string}
              alt="Movie"
              width={500}
              height={400}
              className="absolute h-full w-full rounded-sm object-cover"
            />
            <div className="relative z-10 h-60 w-full transform opacity-0 transition duration-500 hover:scale-125 hover:opacity-100">
              <div className="z-10 flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-transparent via-black/50 to-black">
                <Image
                  src={movie.Movie?.imageString as string}
                  alt="Movie"
                  width={800}
                  height={800}
                  className="absolute -z-10 h-full w-full rounded-lg object-cover"
                />

                <MovieCard
                  key={movie.Movie?.id}
                  age={movie.Movie?.age as number}
                  movieId={movie.Movie?.id as number}
                  overview={movie.Movie?.overview as string}
                  time={movie.Movie?.duration as number}
                  title={movie.Movie?.title as string}
                  wachtListId={movie.Movie?.WatchLists[0]?.id as string}
                  watchList={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                  year={movie.Movie?.release as number}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
