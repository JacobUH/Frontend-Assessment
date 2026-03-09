import { Op } from "@/types/ops";

export const filterOps = (
  ops: Op[],
  employeeSearch: string,
  titleSearch: string,
  idSearch: string
): Op[] => {
  return ops.filter((op) => {
    const matchesEmployee =
      employeeSearch === "" ||
      op.operators.some((operator) =>
        `${operator.firstName} ${operator.lastName}`
          .toLowerCase()
          .includes(employeeSearch.toLowerCase())
      );

    const matchesTitle =
      titleSearch === "" ||
      op.opTitle.toLowerCase().includes(titleSearch.toLowerCase());

    const matchesID =
      idSearch === "" || op.publicId.toString().includes(idSearch);

    return matchesEmployee && matchesTitle && matchesID;
  });
};