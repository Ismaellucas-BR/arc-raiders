import Logo from "../svg/Logo";
import SteamLogo from "../svg/SteamLogo";
import EpicLogo from "../svg/EpicLogo";
import PS5Logo from "../svg/PS5Logo";
import XboxLogo from "../svg/XboxLogo";
import NvidiaLogo from "../svg/NvidiaLogo";
import { Link } from "react-router";
export default function HeroNoVideo() {
  return (
    <section className="relative hero-arc flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full min-w-[100%] h-[100vh]">
      <div className="bg-black/50 absolute inset-0 z-0 h-full"></div>
      <div className="flex flex-col justify-center items-center min-w-[90%] gap-6 py-10 z-10 lg:gap-10 xl:gap-12">
        <div className="flex flex-col justify-center items-center gap-3 lg:gap-10 xl:gap-12">
          <Logo textcolor="#fff" />
          <h2 className="text-[#ece2d0] text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] text-center leading-10 uppercase font-bold">
            Disponível agora
          </h2>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 justify-center">
          <SteamLogo width={78.5} height={24} />
          <EpicLogo width={67.09} height={24} />
          <PS5Logo width={83.5} height={24} />
          <XboxLogo width={152} height={24} />
          <NvidiaLogo width={79.56} height={24} />
        </div>
        <Link
          to=""
          className="border border-bege rounded-sm uppercase font-barlow font-semibold text-bege px-10 py-2 text-[1.125rem]">
          Assista ao trailer
        </Link>
      </div>
    </section>
  );
}
