import { IEmptyStateProps } from "./types";
import { CircleXIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  className,
  title,
  description,
}: IEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-full bg-white rounded-lg p-4 border border-gray-200 gap-2",
        className,
      )}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <CircleXIcon className="w-10 h-10 text-muted-foreground" />
      </div>
    </div>
  );
}
