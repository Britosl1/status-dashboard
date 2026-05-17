"use client";

import { useEffect, useState } from "react";
import { StatusCard } from "../StatusCard";
import { IDashboardService } from "../../entities";
import { StatusCardSkeleton } from "../StatusCardSkeleton";
import { EmptyState } from "../EmptyState";
import { toast } from "sonner";

export function StatusGrid() {
  const [services, setServices] = useState<IDashboardService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api");
      const data = await res.json();
      setServices(data);
      console.log(data);
      
    } catch (error) {
      console.error(error);
      toast.error("Error fetching services", { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <StatusCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!isLoading && services.length === 0) {
    return (
      <div className="w-full p-4 flex items-center justify-center h-full">
        <EmptyState title="No results found" description="Try again later" />
      </div>
    );
  }

  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service) => (
        <StatusCard key={service.id} service={service} />
      ))}
    </div>
  );
}
