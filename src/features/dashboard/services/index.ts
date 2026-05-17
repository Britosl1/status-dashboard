import { IDashboardService } from "../entities";

export const getStatusService = async (): Promise<IDashboardService[]> => {
  const res = await fetch("/api");
  const data: IDashboardService[] = await res.json();
  return data;
};
