import EpicLogo from "../../svg/EpicLogo";
import Logo from "../../svg/Logo";
import SteamLogo from "../../svg/SteamLogo";
import PS5Logo from "../../svg/PS5Logo";
import XboxLogo from "../../svg/XboxLogo";
import GeForce from "../../svg/NvidiaLogo";

interface PropsAvailable {
  haveLogo?: boolean;
  ExtraClassLogoSection?: string;
}

export default function AvailableNowLogosSection(props: PropsAvailable) {
  return (
    <section>
      <div
        className={`flex flex-col justify-center items-center border-t-[5px] border-[#ffbc13] bg-dark-blue w-full py-10 ${props.ExtraClassLogoSection}`}>
        <div className="flex flex-col justify-center items-center w-[90%] gap-5">
          {props.haveLogo && <Logo textcolor="#fff" />}
          <h2 className="font-barlow font-bold text-[#ece2d0] text-[2.5rem] uppercase">
            Disponível agora
          </h2>
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <div className="flex justify-center items-center w-full gap-3">
              <div className="w-[20%] bg-[linear-gradient(90deg,transparent,#ece2d0)] h-[1px]"></div>
              <div>
                <span className="font-barlow font-normal text-[1.115rem] uppercase text-nowrap">
                  Selecione sua plataforma
                </span>
              </div>
              <div className="w-[20%] bg-[linear-gradient(90deg,transparent,#ece2d0)] h-[1px] rotate-180"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 md:flex-wrap md:w-full xl:flex-nowrap xl:flex-row">
              <div className=" flex flex-col justify-center items-center border-2 border-white rounded-xs py-3 px-10 w-[85%] md:px-2">
                <SteamLogo
                  className="md:w-[99px]! md:h-[30px]!"
                  width={110.52}
                  height={35}
                />
              </div>
              <div className=" flex flex-col justify-center items-center border-2 border-white rounded-xs py-3 px-10 w-[85%] md:px-2">
                <EpicLogo
                  className="md:w-[80px]! md:h-[30px]!"
                  width={92.09}
                  height={35}
                />
              </div>
              <div className=" flex flex-col justify-center items-center border-2 border-white rounded-xs py-3 px-10 w-[85%] md:px-2">
                <PS5Logo
                  className="md:w-[115.38px]! md:h-[30px]!"
                  width={138.35}
                  height={30}
                />
              </div>
              <div className=" flex flex-col justify-center items-center border-2 border-white rounded-xs py-3 px-10 w-[85%] md:px-2">
                <XboxLogo
                  className="md:w-[203.7px]! md:h-[30px]!"
                  width={244.44}
                  height={40}
                />
              </div>
              <div className=" flex flex-col justify-center items-center border-2 border-white rounded-xs py-3 px-10 w-[85%] md:px-2 md:justify-self-center">
                <GeForce
                  className="md:w-[92.81px]! md:h-[28px]!"
                  width={116.03}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
