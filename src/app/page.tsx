import { StatusGrid } from "@/features/dashboard/components/StatusGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Status Dashboard</h1>
      <StatusGrid />
    </div>
  );
}
