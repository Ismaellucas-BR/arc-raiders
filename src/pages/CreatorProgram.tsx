import HeroSection from "../components/creator-program/HeroSection";
import SecondSection from "../components/creator-program/SecondSection";

export default function CreatorProgram() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <HeroSection />
      <SecondSection />
    </main>
  );
}
