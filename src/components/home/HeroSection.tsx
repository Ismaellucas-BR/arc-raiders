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
      imageUrlMobile:
        "https://cms-assets.xboxservices.com/assets/1b/53/1b53f87d-68d7-4bbf-8206-2d39d9c23336.jpg?n=730026216_Page-Hero-0_767x1175.jpg",
      imageUrlTablet:
        "https://cms-assets.xboxservices.com/assets/39/f1/39f14cbd-b42c-490e-9041-d65faaa9ef43.jpg?n=730026216_Page-Hero-768_1083x1222.jpg",
      pretitle: "jogue no primeiro dia com o game pass",
      title: "Call of Duty®: Black Ops 7",
      subtitle:
        "Abrace a loucura com o Black Ops mais insano de todos os tempos. ",
      justifyTextSlide: "",
      ExtraClassTitle: "text-[3.875rem]",
    },
    {
      id: 1,
      type: "image",
      imageUrlDesktop:
        "https://cms-assets.xboxservices.com/assets/43/e5/43e54611-254d-41ae-b648-da290de55e3b.jpg?n=FO4-Anniversary-Edition_Page-Hero-1084_1920x720.jpg",
      imageUrlMobile:
        "https://cms-assets.xboxservices.com/assets/1a/de/1ade8f46-6cf7-46cf-b422-5d534692a9e4.jpg?n=FO4-Anniversary-Edition_Page-Hero-0_767x1175.jpg",
      imageUrlTablet:
        "https://cms-assets.xboxservices.com/assets/26/63/2663802f-7503-4039-8ef6-84fba5bd0288.jpg?n=FO4-Anniversary-Edition_Page-Hero-768_1083x1222.jpg",
      title: "Fallout 4: Anniversary Edition",
      subtitle:
        "Jogue a aventura pós-nuclear completa, incluindo as seis expansões.",
      justifyTextSlide: "",
      ExtraClassTitle: "text-[2.875rem]",
      extraClassPreTitle: "hidden!",
    },
    {
      id: 2,
      type: "image",
      imageUrlDesktop:
        "https://cms-assets.xboxservices.com/assets/22/62/2262735b-7198-46a6-b57d-3038ba54ac44.jpg?n=346743332231_Page-Hero-1084_1920x720_02.jpg",
      imageUrlMobile:
        "https://cms-assets.xboxservices.com/assets/1b/9c/1b9c752b-2b18-45a4-9c61-eb31acae8be5.jpg?n=346743332231_Page-Hero-0_767x1175.jpg",
      imageUrlTablet:
        "https://cms-assets.xboxservices.com/assets/e2/56/e25674c4-776c-4e14-970b-1967893cba4f.jpg?n=346743332231_Page-Hero-768_1083x1222.jpg",
      pretitle: "Já Disponível",
      title: "The Outer Worlds 2",
      subtitle: "Explore uma nova fronteira com o PC Game Pass ou Ultimate",
      justifyTextSlide: "",
      ExtraClassTitle: "text-[2.875rem]",
      ExtraClassTitleImg: "xl:text-[2.875rem]!",
    },
    {
      id: 3,
      type: "image",
      imageUrlDesktop:
        "https://cms-assets.xboxservices.com/assets/b2/31/b2318f32-af97-4e1c-bf5f-20a36ac599fa.jpg?n=4990200040_Page-Hero-1084_1920x720.jpg",
      imageUrlTablet:
        "https://cms-assets.xboxservices.com/assets/dd/5d/dd5d06d7-05c0-47c8-8aba-8af8a4938927.jpg?n=4990200040_Page-Hero-768_1083x1222.jpg",
      imageUrlMobile:
        "https://cms-assets.xboxservices.com/assets/f2/24/f224f07c-1a91-4905-8e6a-b0d56f92adab.jpg?n=4990200040_Page-Hero-0_767x1175.jpg",
      pretitle: "Já Disponível",
      title: "NINJA GAIDEN 4",
      subtitle:
        "Onde as sombras caem, as lendas surgem.      Jogue agora com o Game Pass ou compre",
      justifyTextSlide: "",
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
    <section className="w-full lg:h-[100%]">
      <EmblaCarousel slides={limitedSlides} options={options} />
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 justify-items-center text-center gap-6 py-10 px-5 md:grid-cols-5 lg:w-8/12">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg"
              alt=""
              className="w-[3.375rem] lg:w-[4.5rem]"
            />
            <p className="uppercase text-green-xbox font-bold">GAME PASS</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg"
              alt=""
              className="w-[3.375rem] lg:w-[4.5rem]"
            />
            <p className="uppercase text-green-xbox font-bold">Jogos</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://cms-assets.xboxservices.com/assets/23/fa/23faa3d3-6b06-4f5a-af6b-398871766985.svg?n=Homepage-FY20_Home-Icons-0_Devices_88x56.svg"
              alt=""
              className="w-[3.375rem] lg:w-[4.5rem]"
            />
            <p className="uppercase text-green-xbox font-bold">DIspositivos</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://assets.xboxservices.com/assets/29/ff/29ffa9b2-2d48-433b-abb7-99229bcbaa8b.svg?n=Homepage-FY20_Home-Icons-0_Accessories_72x56-01.svg"
              alt=""
              className="w-[3.375rem] lg:w-[4.5rem]"
            />
            <p className="uppercase text-green-xbox font-bold">ACESSÓRIOS</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://assets.xboxservices.com/assets/b0/5e/b05eb3af-fda3-481c-8edc-585eb33b864a.svg?n=Homepage-FY20_Home-Icons-0_Play_72x56_02.svg"
              alt=""
              className="w-[3.375rem] lg:w-[4.5rem]"
            />
            <p className="uppercase text-green-xbox font-bold">JOGAR</p>
          </div>
        </div>
      </div>
    </section>
  );
}
