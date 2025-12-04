import { Skeleton } from "../../../components/ui/skeleton";

export default function SkeletonHero() {
  return (
    <div className="w-full flex flex-col gap-16">
      {/* HERO */}
      <section className="w-full h-[28rem] flex flex-col justify-center items-center bg-neutral-200">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-6 w-96" />
      </section>

      {/* FEATURES */}
      <section className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-3">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-56" />
          </div>
        ))}
      </section>

      {/* WATCH (vídeo / imagem) */}
      <section className="w-full px-4 lg:px-10">
        <Skeleton className="w-full h-[20rem] rounded-lg" />
      </section>

      {/* NEWS */}
      <section className="px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </section>
    </div>
  );
}
