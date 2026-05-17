export type Status = "ONLINE" | "OFFLINE" | "WARNING";

export interface IDashboardService {
  id: string;
  name: string;
  status: Status;
  lastUpdate: string;
}
