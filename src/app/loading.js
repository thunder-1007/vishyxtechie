import { SkeletonCard, SkeletonText } from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28" aria-busy="true" aria-label="Loading page">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="skeleton h-12 w-3/4 rounded-lg md:h-16" />
          <SkeletonText className="mt-6 max-w-xl" lines={3} />
          <div className="mt-8 flex gap-4"><div className="skeleton h-11 w-36 rounded-md" /><div className="skeleton h-11 w-36 rounded-md" /></div>
        </div>
        <div className="skeleton aspect-[4/3] rounded-2xl" />
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">{Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)}</div>
    </div>
  );
}
