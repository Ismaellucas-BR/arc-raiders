import FirstBar from "../svg/FirstBar";
import FourthBar from "../svg/FouthBar";
import SecondBar from "../svg/SecondBar";
import ThirdBar from "../svg/ThirdBar";

export default function Features() {
  const Data = [
    {
      title: "enlist.\nresist",
      content:
        "ARC Raiders is a multiplayer extraction adventure, set in a lethal future earth, ravaged by a mysterious mechanized threat known as ARC. Enlist as a Raider and scavenge the surface to thrive in a desolate world. But beware of the machines. Beware of Raiders preying on others.",
      imageBar: "",
      imageMobile:
        "https://arcraiders.com/images/features/features-keyart-mobile.jpg",
      imageDesktop:
        "https://arcraiders.com/images/features/features-keyart.jpg",
      ExtraClassSection: "justify-start",
      ExtraClassText:
        "text-[3.75rem] md:text-[97.5px] md:leading-20 xl:text-[5rem] xl:leading-20",
    },
    {
      title: "An extraction \nadventure.",
      content:
        "ARC Raiders blends the tension from extraction shooters with atmospheric settings from the adventure genre. Lurking threats—from deadly machines to other Raiders—create a constant ebb and flow of intensity, where every moment is charged with the thrill of high stakes. Extract valuable loot and explore the unfolding mysteries of a vibrant, lethal world.",
      imageBar: <FirstBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-1-mobile.jpg",
      imageDesktop: "http://arcraiders.com/images/features/feature-1.jpg",
      ExtraClassSection: "justify-end",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      title: "Explore an immersive world.",
      content:
        "Lethal and bold but vibrant and beautiful, ARC Raiders offers an inviting take on the post-post-apocalypse. An immersive world built using Unreal Engine 5 where the remnants of Italy's rich history blend with brutal infrastructure for space travel. While lethal machines roam the dangerous surface, the cantina below ground still has food options.",
      imageBar: <SecondBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-2-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-2.jpg",
      ExtraClassSection: "justify-end md:justify-start",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      title: "Shape your raider.",
      content:
        "What are you willing to risk to get what you want? As you step into the shoes of a Raider, you'll quickly realize all choices come with a consequence. ARC Raiders offers the freedom to shape your character both in terms of identity and playstyle with versatile mechanics making for a dynamic and approachable experience.",
      imageBar: <ThirdBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-3-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-3.jpg",
      ExtraClassSection: "justify-end",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
    {
      title: "Cross-platform social play.",
      content:
        "ARC Raiders supports seamless social play across PlayStation, Xbox, and PC. Play with your squad and thrive as a team, or rise in the ranks as a lone ranger. Connect, collaborate, and compete, no matter where or how you play.",
      imageBar: <FourthBar />,
      imageMobile:
        "https://arcraiders.com/images/features/feature-4-mobile.jpg",
      imageDesktop: "https://arcraiders.com/images/features/feature-4.jpg",
      ExtraClassSection: "justify-end md:justify-start",
      ExtraClassText:
        "text-[3rem] md:text-[3.5rem] md:leading-14 xl:text-[5rem] xl:leading-20",
    },
  ];

  return (
    <section className="flex flex-col w-full">
      {Data.map((item, index) => (
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
          <div className="w-full md:w-2/3 lg:w-2/4 p-6 md:p-10 flex flex-col gap-4 absolute ">
            <div className="flex items-center gap-3">
              {item.imageBar && <div className="w-[10%]">{item.imageBar}</div>}
              <h2
                className={`font-barlow font-bold  whitespace-pre-line leading-14 ${item.ExtraClassText}`}>
                {item.title}
              </h2>
            </div>

            <p className="text-lg opacity-90 text-[1.25rem] md:text-[1rem] font-barlow xl:text-[1.25rem]">
              {item.content}
            </p>
          </div>
        </section>
      ))}
    </section>
  );
}
