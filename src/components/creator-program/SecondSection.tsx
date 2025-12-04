import { Link } from "react-router";
import FirstBar from "../svg/FirstBar";

export default function SecondSection() {
  return (
    <section className="bg-second-section-creator bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center max-w-[100rem]">
      <div className="flex flex-col justify-center items-start w-[90%] gap-7 py-7">
        <p className="font-barlow font-medium text-[1.25rem] uppercase lg:text-[1.5rem]">
          De Embarque com amor!
        </p>
        <span className="font-barlow font-medium text-[1.125rem] uppercase lg:text-[1.25rem] xl:text-[1.5rem]">
          Queremos trabalhar com criadores que sejam{" "}
          <span className="text-yellow-arc!">apaixonados</span> pelos nossos
          jogos, <span className="text-yellow-arc!">que interajam</span>{" "}
          ativamente com o seu público e que produzam conteúdo verdadeiramente{" "}
          <span className="text-yellow-arc!">único</span>.
        </span>
        <div>
          <div className="w-full lg:w-3/4 md:py-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-[10%] lg:w-[5%]">
                <FirstBar />
              </div>
              <h2
                className={`font-barlow font-bold  whitespace-pre-line text-[2.5rem] leading-10 md:text-[3.5rem] md:leading-14 xl:text-[4rem] xl:leading-16`}>
                Inscreva-se agora. Comece sua jornada como criador...
              </h2>
            </div>

            <p className="text-lg opacity-90 text-[1.25rem] md:text-[1rem] font-barlow lg:text-[1.25rem]">
              Iniciante ou especialista em conteúdo de superfície? Todos são
              bem-vindos. Nosso programa foi desenvolvido para criadores de
              todos os níveis. Aprimore suas habilidades, expanda seu público e
              colabore conosco ao longo do caminho.
            </p>
            <Link
              to=""
              className="bg-yellow-arc text-dark-blue rounded-sm uppercase font-barlow font-semibold px-10 py-3 text-[1.125rem] max-w-fit">
              Níveis do programa
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
