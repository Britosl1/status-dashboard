"use client";

import { useEffect, useState } from "react";
import { StatusCard } from "../StatusCard";
import { IDashboardService } from "../../entities";
import { EmptyState } from "../EmptyState";
import { toast } from "sonner";
import { getStatusService } from "../../services";
import { StatusFilterInput } from "../StatusFilterInput";
import { StatusCardSkeletonGrid } from "../StatusCardSkeletonGrid";

export function StatusGrid() {
  const [services, setServices] = useState<IDashboardService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchStatus, setSearchStatus] = useState<string>("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getStatusService();
      setServices(data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching services", { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredStatus = services.filter((service) =>
    service.status.toLowerCase().includes(searchStatus.toLowerCase()),
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <StatusCardSkeletonGrid />;
  }

  if (!isLoading && services.length === 0) {
    return (
      <div className="w-full p-4 flex items-center justify-center h-full">
        <EmptyState title="No results found" description="Try again later" />
      </div>
    );
  }

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <StatusFilterInput
        searchStatus={searchStatus}
        setSearchStatus={setSearchStatus}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStatus.length > 0 &&
          filteredStatus.map((service) => (
            <StatusCard key={service.id} service={service} />
          ))}
      </div>
      {filteredStatus.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <EmptyState
            className="w-full h-full"
            title="No results found"
            description="Try searching for a different status"
          />
        </div>
      )}
    </div>
  );
}
