import { IStatusCardProps } from "./types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "../StatusBadge";
import { formatDate } from "../../utils/date-utils";

export function StatusCard({ service }: IStatusCardProps) {
  return (
    <Card className="min-w-64 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <StatusBadge status={service.status} />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs text-muted-foreground">
          Last updated at: {formatDate(service.lastUpdate)}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
