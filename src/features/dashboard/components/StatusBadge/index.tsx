import { Badge } from "@/components/ui/badge";
import { IStatusBadgeProps } from "./types";
import { Status } from "../../entities";

export function StatusBadge({ status }: IStatusBadgeProps) {
  const getStatusColor = (status: Status) => {
    switch (status) {
      case "ONLINE":
        return "bg-green-500";
      case "OFFLINE":
        return "bg-red-500";
      case "WARNING":
        return "bg-yellow-500";
    }
  };
  return (
    <Badge
      variant="outline"
      className={`px-2 py-1 rounded-md ${getStatusColor(status)}`}
    >
      {status}
    </Badge>
  );
}
