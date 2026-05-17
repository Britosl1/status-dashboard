"use client";

import { useEffect, useState } from "react";
import { StatusCard } from "../StatusCard";
import { IDashboardService } from "../../entities";
import { StatusCardSkeleton } from "../StatusCardSkeleton";
import { EmptyState } from "../EmptyState";

export function StatusGrid() {
  const [services, setServices] = useState<IDashboardService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api");
      console.log(res);
      const data = await res.json();
      setServices(data);
      console.log(data);
      
    } catch (error) {
      console.error(error);
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

  if (services.length > 0) {
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
