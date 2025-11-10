import EmblaCarousel from "../carousel/EmblaCarousel";
import type { SlideProps } from "../carousel/EmblaCarousel";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("home");
  const options = { loop: true };

  const CarouselData: SlideProps[] = [
    {
      id: 0,
      type: "video",
      videoUrl:
        "https://cms-assets.xboxservices.com/assets/db/13/db137951-b8a4-4989-9e49-900784f75aed.mp4?n=5491272942-HP_Cinemagraph_1920x720_01.mp4",
      pretitle: "jogue no primeiro dia com o game pass",
      title: "Call of Duty®: Black Ops 7",
      subtitle:
        "Abrace a loucura com o Black Ops mais insano de todos os tempos. ",
      justifyTextSlide: "items-start",
      ExtraClassTitle: "text-[3.875rem]",
    },
    {
      id: 1,
      type: "image",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/22/62/2262735b-7198-46a6-b57d-3038ba54ac44.jpg?n=346743332231_Page-Hero-1084_1920x720_02.jpg",
      pretitle: "Já Disponível",
      title: "The Outer Worlds 2",
      subtitle: "Explore uma nova fronteira com o PC Game Pass ou Ultimate",
      justifyTextSlide: "items-end",
      ExtraClassTitle: "text-[2.875rem]",
    },
    {
      id: 2,
      type: "image",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/b2/31/b2318f32-af97-4e1c-bf5f-20a36ac599fa.jpg?n=4990200040_Page-Hero-1084_1920x720.jpg",
      pretitle: "Já Disponível",
      title: "NINJA GAIDEN 4",
      subtitle:
        "Onde as sombras caem, as lendas surgem.      Jogue agora com o Game Pass ou compre",
      justifyTextSlide: "items-end",
      ExtraClassTitle: "text-[2.875rem]",
    },
    {
      id: 3,
      type: "image",
      imageUrl:
        "https://cms-assets.xboxservices.com/assets/94/33/94335341-2bb9-45b8-ba37-b9d84524de7f.jpg?n=Keeper_Page-Hero-1084_1920x720.jpg",
      pretitle: "JOGUE COM O GAME PASS",
      title: "Keeper",
      subtitle: "Uma história contada sem palavras.",
      justifyTextSlide: "items-end",
      ExtraClassTitle: "text-[2.875rem]",
    },
  ];

  const limitedSlides = CarouselData.slice(0, 4);

  return (
    <section className="w-full lg:h-[32.25rem]">
      <EmblaCarousel slides={limitedSlides} options={options} />
    </section>
  );
}
