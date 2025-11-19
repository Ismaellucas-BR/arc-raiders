import { Link } from "react-router";
export default function LastetsNews() {
  return (
    <section className="flex flex-col items-center justify-center gap-7 md:gap-10  lg:py-20 pb-10 max-w-[100rem] bg-bege w-full py-10 xl:w-full xl:py-10 xl:px-12 ">
      <h2 className="text-dark-blue font-barlow font-bold text-center text-[3rem] md:text-[4rem] xl:text-[5rem] uppercase  leading-12 w-full xl:leading-24">
        Últimas Notícias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[70%] md:w-[85%] lg:w-[60%] overflow-hidden md:gap-10">
        <div className="rounded-lg border border-[#51a5b7]">
          <img
            src="https://storage.googleapis.com/web-arc-raiders-cms-assets/article-cards/d8fcf0d5-0257-north-line-patch-notes-card-300x200-300x200.png"
            alt=""
            className=" w-full 
    h-[100px] 
    object-fill 
    aspect-[3/1] 
    overflow-clip 
    md:h-[200px]
    rounded-t-lg"
          />
          <div className="flex flex-col justify-center items-center py-3 bg-white rounded-b-lg">
            <p className="font-barlow font-medium text-sm text-[#130918cc]">
              13 de novembro de 2025
            </p>
            <p className="font-barlow font-medium text-dark-blue text-lg">
              Atualização de novembro 1.2.0
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-[#51a5b7]">
          <img
            src="https://storage.googleapis.com/web-arc-raiders-cms-assets/article-cards/d8fcf0d5-0257-north-line-patch-notes-card-300x200-300x200.png"
            alt=""
            className="rounded-t-lg w-full"
          />
          <div className="flex flex-col justify-center items-center py-3 bg-white rounded-b-lg">
            <p className="font-barlow font-medium text-sm text-[#130918cc]">
              13 de novembro de 2025
            </p>
            <p className="font-barlow font-medium text-dark-blue text-lg">
              Atualização de novembro 1.2.0
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-[#51a5b7]">
          <img
            src="https://storage.googleapis.com/web-arc-raiders-cms-assets/article-cards/d8fcf0d5-0257-north-line-patch-notes-card-300x200-300x200.png"
            alt=""
            className="rounded-t-lg w-full"
          />
          <div className="flex flex-col justify-center items-center py-3 bg-white rounded-b-lg">
            <p className="font-barlow font-medium text-sm text-[#130918cc]">
              13 de novembro de 2025
            </p>
            <p className="font-barlow font-medium text-dark-blue text-lg">
              Atualização de novembro 1.2.0
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-[#51a5b7]">
          <img
            src="https://storage.googleapis.com/web-arc-raiders-cms-assets/article-cards/d8fcf0d5-0257-north-line-patch-notes-card-300x200-300x200.png"
            alt=""
            className="rounded-t-lg w-full"
          />
          <div className="flex flex-col justify-center items-center py-3 bg-white rounded-b-lg">
            <p className="font-barlow font-medium text-sm text-[#130918cc]">
              13 de novembro de 2025
            </p>
            <p className="font-barlow font-medium text-dark-blue text-lg">
              Atualização de novembro 1.2.0
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 w-full flex flex-col justify-center items-center lg:w-[60%]">
        <Link
          to=""
          className="w-full rounded-sm uppercase font-barlow font-semibold bg-[#f1aa1c] text-dark-blue text-center px-10 py-2 text-[1.125rem]">
          Assista ao trailer
        </Link>
      </div>
    </section>
  );
}
