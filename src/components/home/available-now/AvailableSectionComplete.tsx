import AvailableNowLogosSection from "./AvailableNowLogosSection";

export default function AvailableSectionComplete() {
  return (
    <div className="xl:w-2/3 xl:rounded-lg xl:my-20">
      <div className="border-b-[5px] border-[#ffbc13] xl:rounded-b-lg">
        <AvailableNowLogosSection
          ExtraClassLogoSection="xl:rounded-t-lg"
          haveLogo={true}
        />
        <div className="border-t-[5px] border-[#ffbc13]">
          <img
            src="https://arcraiders.com/images/editions/ArcRaiders_Preorder_Deluxe_Tall_LAUNCH.jpg"
            alt="ARC Raiders Edição Deluxe"
          />
        </div>
        <AvailableNowLogosSection ExtraClassLogoSection="xl:rounded-b-lg" />
      </div>
    </div>
  );
}
