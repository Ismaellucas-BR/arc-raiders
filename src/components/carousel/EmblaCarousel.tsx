import React, { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

export interface SlideProps {
  id: number;
  type: "video" | "image";
  pretitle: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  videoUrl?: string;
  justifyTextSlide?: string;
  ExtraClassTitle?: string;
}

type PropType = {
  slides: SlideProps[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] relative overflow-hidden">
              {slide.type === "video" && slide.videoUrl ? (
                <div className="relative w-full overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover">
                    <source src={slide.videoUrl} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>

                  {/* Overlay com texto */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/70 flex flex-col items-center justify-center text-center p-4 w-full px-[5%] ${slide.justifyTextSlide} ${slide.justifyTextSlide}`}>
                    <div className="lg:w-2/5 text-left">
                      <span className="uppercase bg-[#ffd800] text-black font-semibold text-[0.8125rem] px-2">
                        {slide.pretitle}
                      </span>
                      <h2 className="text-white text-xl font-bold drop-shadow-lg text-[3.875rem]">
                        {slide.title}
                      </h2>
                      <p className="text-gray-200 drop-shadow-md text-[2.125rem]">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                slide.imageUrl && (
                  <div className="relative w-full h-full">
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/70 flex flex-col items-center justify-center text-center p-4 w-full px-[5%] ${slide.justifyTextSlide} ${slide.justifyTextSlide}`}>
                      <div className="lg:w-2/5 text-left">
                        <span className="uppercase bg-[#ffd800] text-black font-semibold text-[0.8125rem] px-2">
                          {slide.pretitle}
                        </span>
                        <h2
                          className={`text-white text-xl font-bold drop-shadow-lg ${slide.ExtraClassTitle}`}>
                          {slide.title}
                        </h2>
                        <p className="text-gray-200 drop-shadow-md text-[2.125rem]">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="embla__controls flex items-center justify-between mt-4">
        <div className="embla__progress flex-1 bg-gray-700 h-1 mx-2 relative">
          <div
            className="embla__progress__bar bg-green-500 absolute top-0 left-0 h-1"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
