"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";
import { addToWatchList, deleteFromWatchlist } from "../action";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  wachtListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

export default function MovieCard({
  age,
  movieId,
  overview,
  time,
  title,
  wachtListId,
  watchList,
  year,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="absolute right-5 top-5 z-10">
        {watchList ? (
          <form action={deleteFromWatchlist}>
            <input type="hidden" name="watchlistId" value={wachtListId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>

        <div className="flex items-center gap-x-2">
          <p className="text-sm font-normal">{year}</p>
          <p className="border border-gray-200 px-1 py-0.5 text-sm font-normal">
            {age}+
          </p>
          <p className="text-sm font-normal">{time}h</p>
        </div>

        <p className="line-clamp-1 text-sm font-light  text-gray-200">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </>
  );
}
