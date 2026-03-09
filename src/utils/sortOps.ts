import { Operator } from "@/types/ops";

export const sortOps = (
  operators: Operator[],
  sortBy: string,
  sortDirection: "asc" | "desc"
) => {
  return [...operators].sort((a, b) => {
    if (!sortBy) return 0;

    let aValue;
    let bValue;

    switch (sortBy) {
      case "firstname":
        aValue = a.firstName?.toLowerCase() ?? "";
        bValue = b.firstName?.toLowerCase() ?? "";
        break;

      case "lastname":
        aValue = a.lastName?.toLowerCase() ?? "";
        bValue = b.lastName?.toLowerCase() ?? "";
        break;

      case "opsCompleted":
        aValue = a.opsCompleted ?? 0;
        bValue = b.opsCompleted ?? 0;
        break;

      case "reliability":
        aValue = a.reliability ?? 0;
        bValue = b.reliability ?? 0;
        break;

      default:
        return 0;
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
};