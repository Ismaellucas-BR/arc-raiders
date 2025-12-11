export default function NewsSkeleton({ count = 4 }) {
  return (
    <div className="flex flex-col gap-5 md:flex-wrap md:flex-row md:justify-center md:items-center w-full">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col bg-white rounded-md shadow-md h-[280px] w-full md:w-[45%] xl:w-[23%]">
          <div className="h-40 bg-gray-300 rounded-t-md animate-pulse" />
          <div className="p-4 flex flex-col gap-3">
            <div className="h-4 bg-gray-300 w-3/4 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 w-1/2 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
