import { StatusCardSkeleton } from "./components/StatusCardSkeleton";

export function StatusCardSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <StatusCardSkeleton key={index} />
      ))}
    </div>
  );
}
