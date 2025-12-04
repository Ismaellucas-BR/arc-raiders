import Logo from "../components/svg/Logo";
import HalfCircle from "../components/svg/HalfCircle";
import RIcon from "../components/svg/RIcon";
import EnlistIcon from "../components/svg/EnlistIcon";
import Embark from "../components/svg/EmbarkIcon";
import NexonIcon from "../components/svg/NexonIcon";
import UnrealIcon from "../components/svg/UnrealIcon";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import BackToTopButton from "./BackToTopButton";
export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col justify-content-center items-center w-full bg-dark-blue max-w-[100rem] py-4 border-t-5 border-yellow-arc">
      <div className="flex flex-col items-center justify-center py-7 gap-5 lg:py-20 pb-10 max-w-[100rem] xl:w-full xl:py-6 xl:px-12">
        <div className=" flex flex-col justify-start items-start gap-7 w-[90%] lg:flex-row">
          <div className=" flex flex-col justify-start items-start gap-7 lg:flex-row">
            <Logo textcolor="#fff" />
            <div className="flex flex-col justify-start items-center gap-7 w-full lg:flex-row lg:gap-3">
              <div className="flex justify-start items-center gap-3 w-full">
                <HalfCircle />
                <RIcon />
                <EnlistIcon />
              </div>
              <div className="flex justify-start items-center gap-3 w-full">
                <Embark />
                <NexonIcon />
                <UnrealIcon />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start gap-3 w-[90%] ">
          <div className="bg-[#ece2d0] h-[0.3px] w-full mb-5"></div>
          <LanguageSwitcher />
          <BackToTopButton />
          <nav className="flex flex-col gap-3 xl:flex-row xl:w-full xl:mb-7">
            <ul className="flex flex-col justify-center items-start gap-2 font-barlow font-medium capitalize cursor-pointer text-xl xl:flex-row">
              <li>
                <button
                  className="span-effect text-[1.125rem]! capitalize text-bege"
                  onClick={() => {
                    if (location.pathname !== "/") {
                      // Se NÃO estiver na Home → navega para a Home com um state
                      navigate("/", { state: { scrollTo: "watch" } });
                    } else {
                      // Se já estiver na Home → rola diretamente
                      const section = document.querySelector("#watch");
                      if (section)
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}>
                  News {t("Games")}
                </button>
              </li>
              <li>
                <button
                  className="span-effect text-[1.125rem]! capitalize text-bege"
                  onClick={() => {
                    navigate("/#watch"); // navega para a home com hash
                  }}>
                  Media {t("Games")}
                </button>
              </li>

              <li>
                <button
                  className="span-effect text-[1.125rem]! capitalize text-bege"
                  onClick={() => {
                    navigate("/#features");
                  }}>
                  features {t("Games")}
                </button>
              </li>

              <li>
                <Link
                  className="span-effect text-[1.125rem]! capitalize text-bege"
                  to="/twitch-drops">
                  Twitch Drops
                </Link>
              </li>

              <li>
                <Link
                  className="span-effect text-[1.125rem]! capitalize text-bege"
                  to="/creator-program">
                  Creator Program
                </Link>
              </li>
            </ul>
          </nav>
          <span className="text-bege font-barlow text-start text-[0.8125rem]">
            Internet connection, Embark ID user account (+13), third-party
            platform account, and acceptance of the Embark Terms of Service and
            End User License Agreement are required to play, see our user terms:
            https://id.embark.games/arc-raiders/support/section/user-terms. Age
            restrictions apply (13+). Raider Tokens are an in-game currency in
            ARC Raiders. Raider Tokens can be used to get raider decks, bundles,
            or other cosmetic items, including outfits, backpacks, charms,
            emotes, Scrappy outfits, etc.
            <br />
            <br />
            ARC RAIDERS © 2025 Embark Studios AB. ARC RAIDERS and EMBARK
            trademarks and logos are trademarks or registered trademarks of
            Embark Studios AB. NEXON trademark and logo are trademarks or
            registered trademarks of NXC Corporation. © 2025 Sony Interactive
            Entertainment LLC. PlayStation, the PlayStation Family Mark, PS5 and
            the PS5 logo are registered trademarks or trademarks of Sony
            Interactive Entertainment Inc. Microsoft, the Xbox Sphere mark and
            Xbox Series X|S are trademarks of the Microsoft group of companies.
            © 2025 Valve Corporation. Steam and the Steam logo are trademarks
            and/or registered trademarks of Valve Corporation in the U.S. and/or
            other countries. © 2025 Epic Games, Inc. All rights reserved. Epic,
            Epic Games, Epic Games Store, Unreal, Unreal Engine and their
            respective logos are trademarks or registered trademarks of Epic
            Games, Inc. in the U.S. Patent and Trademark Office and elsewhere.
            NVIDIA, the NVIDIA logo and the GeForce Now logo are trademarks
            and/or registered trademarks of NVIDIA Corporation in the U.S.
            and/or other countries.
          </span>
          <img
            src="https://arcraiders.developerismaellucas.com/imgs/age-logos.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}
