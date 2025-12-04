import { useEffect, useState } from "react";
import AccordionSection from "../components/home/AccordionSection";
import AvailableSectionComplete from "../components/home/available-now/AvailableSectionComplete";
import Features from "../components/home/Features";
import HeroNoVideo from "../components/home/HeroNoVideo";
import LastetsNews from "../components/home/LastetsNews";
import WatchTrailers from "../components/home/WatchTrailers";
import { useLocation } from "react-router";
import ScrollToHash from "../components/ScrollToHash";
import SkeletonHome from "../skeletons/SkeletonHome";

export default function Home() {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Carregar notícias
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/noticias?populate=*"
        );

        const json = await res.json();
        setNoticias(json.data ?? []);
      } catch (e) {
        console.error("Erro ao carregar notícias:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Scroll automático ao voltar com state
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);

      setTimeout(() => {
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);

  // Loading Skeleton
  if (loading) return <SkeletonHome />;

  return (
    <div className="flex flex-col justify-center items-center max-w-[100rem]">
      <ScrollToHash />

      <HeroNoVideo />

      {/* Últimas notícias usando somente LastetsNews */}
      <LastetsNews onLoaded={() => setLoading(false)} />

      <WatchTrailers />
      <Features />
      <AvailableSectionComplete />

      <AccordionSection
        title="Perguntas frequentes"
        items={[
          {
            question: "O que está incluído na Edição Deluxe de ARC Raiders?",
            answer:
              "A Edição Deluxe de ARC Raiders inclui todo o conteúdo da Edição Padrão, além do Traje Valente e suas variantes de cor, Mochila Pathfinder, Acessório de Mochila Cobertor Enrolado, Cosmético Facial Cicatriz Labial, Gesto Pistola de Dedo: Tiro Rápido, Skin Cowboy Scrappy e 2.400 Fichas de Raider.",
          },
          {
            question:
              "Posso fazer um upgrade da minha compra da Edição Padrão de ARC Raiders?",
            answer:
              "Após o lançamento, você poderá adquirir uma atualização para a Edição Deluxe e receber o Traje Valente e suas variantes de cor, a Mochila Pathfinder, o Acessório de Mochila Cobertor Enrolado, o Cosmético Facial Cicatriz Labial, o Gesto Pistola de Dedo: Tiro Rápido, a Skin Cowboy Scrappy e 2.400 Fichas de Saqueador.",
          },
          {
            question:
              "A atualização para a Edição Deluxe após o lançamento desbloqueará o Pacote Astro?",
            answer:
              "O Pacote Astro só é desbloqueado através da pré-venda da Edição Deluxe e não estará incluído em atualizações pós-lançamento. O Pacote Patinho da Sorte só pode ser desbloqueado uma vez; uma atualização para a Edição Deluxe após o lançamento não desbloqueará um segundo Pacote Patinho da Sorte. Os bônus de pré-venda não estarão mais disponíveis, exceto através de quaisquer pacotes NVIDIA restantes.",
          },
          {
            question:
              "Eu fiz a pré-encomenda de ARC Raiders. Quando receberei meu bônus de pré-encomenda?",
            answer:
              "Se você fez a pré-encomenda da Edição Standard ou Deluxe de ARC Raiders, seus bônus de pré-encomenda serão desbloqueados automaticamente no jogo no lançamento.",
          },
          {
            question:
              "É possível desbloquear os bônus de pré-venda após o lançamento?",
            answer:
              "Os pacotes Lucky Duck, Bruiser e Astro eram bônus de pré-venda e não estarão disponíveis após o lançamento. Os bônus de pré-venda não estarão mais disponíveis, exceto por meio de quaisquer pacotes NVIDIA restantes.",
          },
          {
            question:
              "Participei do Sever Slam. É possível desbloquear minha recompensa após o lançamento?",
            answer:
              "Sim. A mochila 'Server Slammer' pode ser desbloqueada com a confirmação do ID da Embark.",
          },
          {
            question: "Preços regionais",
            answer:
              "Estamos trabalhando para reduzir o preço dos ARC Raiders em diversos locais para garantir um preço mais justo para todos (lista abaixo). Essa mudança entrará em vigor a partir de 7 de outubro. Se você já fez uma compra em um desses locais, receberá um reembolso parcial automaticamente, embora isso possa levar alguns dias, dependendo da plataforma. Os novos preços serão aplicados em: Brasil, Chile, China, Colômbia, Costa Rica, Índia, Indonésia, Malásia, Peru,Filipinas, Taiwan, Tailândia, Ucrânia, Uruguai e Vietnã. No momento, não estão previstos outros ajustes de preço.",
          },
        ]}
      />
    </div>
  );
}
