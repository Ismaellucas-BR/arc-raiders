import Logo from "../svg/Logo";
import { Link } from "react-router";
export default function HeroSection() {
  return (
    <section className="relative hero-creator flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full min-w-[100%] h-[100vh] max-w-[120rem]">
      <div className="bg-black/50 absolute inset-0 z-0 h-full"></div>
      <div className="flex flex-col justify-center items-center min-w-[90%] gap-6 py-10 z-10 xl:gap-12">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-6 xl:gap-12">
          <div className="flex justify-center items-center gap-3">
            <Logo textcolor="#fff" />
          </div>
          <h2 className="text-[#ece2d0] text-[3rem] md:text-[3.5rem] xl:text-[5rem] text-center leading-12 uppercase font-bold md:leading-14 xl:leading-20">
            Programa Embarque para Criadores
          </h2>
        </div>
        <div className="flex gap-x-7 gap-y-3 justify-center">
          <p className="font-barlow text-[1.125rem] font-medium text-center leading-6 md:text-[1.25rem] xl:text-[1.5rem] w-[85%]">
            Tenha acesso a vantagens e oportunidades exclusivas para desenvolver
            suas habilidades e ampliar seu público.
          </p>
        </div>
        <Link
          to=""
          className="bg-yellow-arc text-dark-blue rounded-sm uppercase font-barlow font-semibold px-10 py-3 text-[1.125rem]">
          Saber Mais
        </Link>
      </div>
    </section>
  );
}
