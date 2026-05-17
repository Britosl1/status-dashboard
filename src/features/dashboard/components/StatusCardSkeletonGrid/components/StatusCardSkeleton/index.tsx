import { Skeleton } from "@/components/ui/skeleton";

export function StatusCardSkeleton() {
  return (
    <Skeleton className="bg-white h-28 min-w-64 hover:shadow-lg transition-shadow duration-300" />
  );
}
