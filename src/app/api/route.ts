import { NextResponse } from "next/server";

export async function GET() {
  const services = [
    {
      id: "1",
      name: "Auth Service",
      status: "ONLINE",
      lastUpdate: "2026-05-17T14:58:00.000Z",
    },
    {
      id: "2",
      name: "Payments API",
      status: "OFFLINE",
      lastUpdate: "2026-05-17T14:40:00.000Z",
    },
    {
      id: "3",
      name: "Notification Service",
      status: "WARNING",
      lastUpdate: "2026-05-17T14:10:00.000Z",
    },
    {
      id: "4",
      name: "User Service",
      status: "ONLINE",
      lastUpdate: "2026-05-17T13:00:00.000Z",
    },
    {
      id: "5",
      name: "Search Engine",
      status: "OFFLINE",
      lastUpdate: "2026-05-17T11:30:00.000Z",
    },
    {
      id: "6",
      name: "Analytics",
      status: "WARNING",
      lastUpdate: "2026-05-17T09:15:00.000Z",
    },
    {
      id: "7",
      name: "Recommendation Engine",
      status: "ONLINE",
      lastUpdate: "2026-05-16T16:00:00.000Z",
    },
    {
      id: "8",
      name: "Email Service",
      status: "OFFLINE",
      lastUpdate: "2026-05-15T10:20:00.000Z",
    },
    {
      id: "9",
      name: "File Storage",
      status: "WARNING",
      lastUpdate: "2026-05-14T08:45:00.000Z",
    },
    {
      id: "10",
      name: "CDN",
      status: "ONLINE",
      lastUpdate: "2026-05-17T14:55:00.000Z",
    },
  ];

  return NextResponse.json(services);
}
