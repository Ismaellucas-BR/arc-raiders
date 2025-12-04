import { useState, useEffect } from "react";
import ArrowLeft from "../svg/ArrowLeft";
import ArrowRight from "../svg/ArrowRight";
import PlayYoutube from "../svg/PlayYoutube";

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/wSeZEUeg5qQ",
    thumb: "https://i.ytimg.com/vi/wSeZEUeg5qQ/sddefault.jpg",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/7AEe6KVAM5s",
    thumb: "https://i.ytimg.com/vi_webp/7AEe6KVAM5s/sddefault.webp",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/XE0y_K8-iSQ",
    thumb: "https://i.ytimg.com/vi_webp/XE0y_K8-iSQ/sddefault.webp",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/sfufcWOh2LE",
    thumb: "https://i.ytimg.com/vi_webp/sfufcWOh2LE/sddefault.webp",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/dTRRb7ODhjA",
    thumb: "https://i.ytimg.com/vi_webp/dTRRb7ODhjA/sddefault.webp",
  },
];

export default function WatchTrailers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentVideo = videos[currentIndex];

  const nextVideo = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsPlaying(false);
    }
  };

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsPlaying(false);
    }
  };

  // Atualiza cores dinamicamente
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  useEffect(() => {
    setLeftDisabled(currentIndex === 0);
    setRightDisabled(currentIndex === videos.length - 1);
  }, [currentIndex]);

  return (
    <section
      id="watch"
      className="flex flex-col items-center justify-center gap-7 pb-10 max-w-[100rem] xl:w-full bg-bege w-full py-10 md:gap-10 lg:pb-20 lg:py-0 xl:py-10 xl:px-12">
      <h2 className="text-dark-blue font-barlow font-bold text-center text-[3rem] uppercase leading-12 w-full px-4 md:text-[4rem] lg:text-[5rem] xl:leading-24">
        Veja os trailers
      </h2>
      <div className="flex justify-center items-center gap-7 md:w-[85%]">
        <button
          onClick={prevVideo}
          disabled={leftDisabled}
          className={`rounded-full transition-all hidden md:block ${
            leftDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-200 active:scale-95"
          }`}>
          <ArrowLeft color={leftDisabled ? "#9ca3af" : "#111"} />
        </button>
        <div className="relative w-[90%] max-w-3xl aspect-video flex items-center justify-center overflow-hidden shadow-lg bg-black xl:max-w-5xl">
          {!isPlaying ? (
            <>
              <img
                src={currentVideo.thumb}
                alt="Trailer thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform">
                <PlayYoutube />
              </button>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`${currentVideo.url}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          )}
        </div>
        <button
          onClick={nextVideo}
          disabled={rightDisabled}
          className={`hidden rounded-full transition-all md:block ${
            rightDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-200 active:scale-95"
          }`}>
          <ArrowRight color={rightDisabled ? "#9ca3af" : "#111"} />
        </button>
      </div>

      <div className="flex justify-center items-center gap-3 md:hidden">
        <button
          onClick={prevVideo}
          disabled={leftDisabled}
          className={`rounded-full transition-all ${
            leftDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-200 active:scale-95"
          }`}>
          <ArrowLeft color={leftDisabled ? "#9ca3af" : "#111"} />
        </button>

        <button
          onClick={nextVideo}
          disabled={rightDisabled}
          className={`rounded-full transition-all ${
            rightDisabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-200 active:scale-95"
          }`}>
          <ArrowRight color={rightDisabled ? "#9ca3af" : "#111"} />
        </button>
      </div>
    </section>
  );
}
