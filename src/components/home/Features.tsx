import FirstBar from "../svg/FirstBar";
import FourthBar from "../svg/FouthBar";
import SecondBar from "../svg/SecondBar";
import ThirdBar from "../svg/ThirdBar";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation("home");

  const Data = [
    {
      imageBar: "",
      imageMobile:
        "https://arcraiders.com/images/features/features-keyart-mobile.jpg",
      imageDesktop:
        "https://arcraiders.com/images/features/features-keyart.jpg",
      ExtraClassSection: "justify-start",
      ExtraClassDiv: "xl:ml-[7.5rem] 5xl:ml-[12rem]",
      ExtraClassText:
        "text-[3.75rem] md:text-[97.5px] md:leading-20 xl:leading-20",
    },
    {
      imageBar: <FirstBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-1-mobile.jpg",
      imageDesktop: "http://arcraiders.com/images/features/feature-1.jpg",
      ExtraClassSection: "justify-end 5xl:items-center",
      ExtraClassDiv: "5xl:items-end",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      imageBar: <SecondBar extraclasssvg="h-[130px]! w-[6.61px]!" />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-2-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-2.jpg",
      ExtraClassSection: "justify-end md:justify-start",
      ExtraClassDiv: "xl:ml-[7.5rem] 5xl:ml-[12rem]",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      imageBar: <ThirdBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-3-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-3.jpg",
      ExtraClassSection: "justify-end 5xl:justify-end",
      ExtraClassDiv: "xl:ml-[7.5rem] 5xl:ml-[12rem] 5xl:items-end",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      imageBar: <FourthBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-4-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-4.jpg",
      ExtraClassSection: "justify-end md:justify-start",
      ExtraClassDiv: "xl:ml-[7.5rem] 5xl:ml-[12rem]",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
  ];

  return (
    <section id="features" className="flex flex-col w-full">
      {Data.map((item, index) => {
        const id = index + 1; // 1, 2, 3, 4, 5...

        return (
          <section
            key={index}
            className={`w-full flex flex-col md:flex-row items-center h-[50rem] ${item.ExtraClassSection}`}>
            {/* 🔹 IMAGEM RESPONSIVA */}
            <div className="w-full h-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: `url(${item.imageMobile})` }}
              />

              <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageDesktop})` }}
              />
            </div>

            {/* 🔹 TEXTO */}
            <div
              className={`w-full md:w-2/3 lg:w-2/4 p-6 md:p-10 flex flex-col gap-4 absolute ${item.ExtraClassDiv}`}>
              <div className={`flex items-center gap-3 5xl:w-1/2`}>
                {item.imageBar && (
                  <div className="w-[10%]">{item.imageBar}</div>
                )}

                <h2
                  className={`font-barlow font-bold whitespace-pre-line leading-14 ${item.ExtraClassText}`}>
                  {t(`featuresText.titleSection${id}`)}
                </h2>
              </div>

              <p className="text-lg opacity-90 text-[1.25rem] md:text-[1rem] font-barlow xl:text-[1.25rem] xl:w-3/4 5xl:w-1/2">
                {t(`featuresText.contentSection${id}`)}
              </p>
            </div>
          </section>
        );
      })}
    </section>
  );
}
