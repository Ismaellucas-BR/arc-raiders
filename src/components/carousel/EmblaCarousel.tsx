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
  pretitle?: string;
  title: string;
  subtitle: string;
  imageUrlMobile?: string;
  imageUrlTablet?: string;
  imageUrlDesktop?: string;
  videoUrl?: string;
  justifyTextSlide?: string;
  ExtraClassTitle?: string;
  extraClassPreTitle?: string;
  ExtraClassTitleImg?: string;
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
              className="embla__slide flex-[0_0_100%] relative overflow-hidden h-[65vh] xl:h-[100%]">
              {/* SLIDE TIPO VÍDEO */}
              {slide.type === "video" && slide.videoUrl ? (
                <>
                  {/* Imagem Mobile */}
                  {slide.imageUrlMobile && (
                    <img
                      src={slide.imageUrlMobile}
                      alt={slide.title}
                      className="block md:hidden w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Imagem Tablet */}
                  {slide.imageUrlTablet && (
                    <img
                      src={slide.imageUrlTablet}
                      alt={slide.title}
                      className="hidden md:block lg:hidden w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Vídeo apenas no Desktop */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hidden lg:block w-full h-full object-cover object-top">
                    <source src={slide.videoUrl} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/70 flex flex-col items-center justify-end text-center p-4 pt-20 w-full px-[10%] lg:px-[5%] ${slide.justifyTextSlide} pb-20 xl:items-start xl:text-left`}>
                    <div className="flex flex-col justify-center items-center gap-3 xl:w-2/5 text-center xl:text-left xl:items-start">
                      <span
                        className={`max-w-max uppercase bg-[#ffd800] text-black font-semibold text-[0.8125rem] px-2 ${slide.extraClassPreTitle}`}>
                        {slide.pretitle}
                      </span>
                      <h2 className="text-white text-xl font-bold drop-shadow-lg text-[1.625rem] lg:text-[3.875rem]">
                        {slide.title}
                      </h2>
                      <p className="text-gray-200 drop-shadow-md text-[0.9375rem] lg:text-[2.125rem]">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                // SLIDE TIPO IMAGEM
                <>
                  {/* Mobile */}
                  {slide.imageUrlMobile && (
                    <img
                      src={slide.imageUrlMobile}
                      alt={slide.title}
                      className="block md:hidden w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Tablet */}
                  {slide.imageUrlTablet && (
                    <img
                      src={slide.imageUrlTablet}
                      alt={slide.title}
                      className="hidden md:block lg:hidden w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Desktop */}
                  {slide.imageUrlDesktop && (
                    <img
                      src={slide.imageUrlDesktop}
                      alt={slide.title}
                      className="hidden lg:block w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 md:bg-gradient-to-b md:from-transparent md:via-black/20 md:to-black/70 flex flex-col items-center justify-end text-center p-4 w-full px-[5%] ${slide.justifyTextSlide} pb-20 xl:items-end`}>
                    <div className="flex flex-col justify-center items-center xl:gap-3 xl:w-2/5 text-center lg:text-left xl:justify-start xl:items-start">
                      <span
                        className={`max-w-max uppercase bg-[#ffd800] text-black font-semibold text-[0.8125rem] px-2 ${slide.extraClassPreTitle}`}>
                        {slide.pretitle}
                      </span>
                      <h2
                        className={`text-white text-xl font-bold drop-shadow-lg text-[1.625rem] lg:text-[2.875rem] xl:text-[3.875rem] xl:leading-[4.5rem] ${slide.ExtraClassTitleImg}`}>
                        {slide.title}
                      </h2>
                      <p className="text-gray-200 drop-shadow-md text-[0.9375rem] lg:text-[2.125rem] text-center xl:text-left">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="embla__controls flex items-center justify-between mt-4 hidden">
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
