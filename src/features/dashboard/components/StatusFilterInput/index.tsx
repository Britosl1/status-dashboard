import { Input } from "@/components/ui/input";
import { IStatusFilterInputProps } from "./types";

export function StatusFilterInput({
  searchStatus,
  setSearchStatus,
}: IStatusFilterInputProps) {
  return (
    <Input
      type="text"
      placeholder="Filter by status"
      className="w-full p-2 rounded-md border border-gray-200"
      onChange={(e) => setSearchStatus(e.target.value)}
      value={searchStatus}
    />
  );
}
