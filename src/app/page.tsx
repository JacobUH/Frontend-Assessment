"use client";
import OpCard from "@/components/OpCard";
import OpSearch from "@/components/OpSearch";
import OpSelect from "@/components/OpSelect";
import { useOps } from "@/hooks/useOps";
import colors from "@/theme/colors";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const { ops, loading, error } = useOps();

  const [employeeSearch, setEmployeeSearch] = useState<string>("");
  const [titleSearch, setTitleSearch] = useState<string>("");
  const [idSearch, setIdSearch] = useState<string>("");

  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  const filteredOps = ops.filter((op) => {
    const matchesEmployee =
      employeeSearch === "" ||
      op.operators.some((operator) =>
        `${operator.firstName} ${operator.lastName}`
          .toLowerCase()
          .includes(employeeSearch.toLowerCase()),
      );
    const matchesTitle =
      titleSearch === "" ||
      op.opTitle.toLowerCase().includes(titleSearch.toLowerCase());

    const matchesID =
      idSearch === "" || op.publicId.toString().includes(idSearch);

    return matchesEmployee && matchesTitle && matchesID;
  });

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: colors.background, py: 4 }}>
      <Container>
        <Typography variant="h1" color="white" gutterBottom>
          Worker Dashboard
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, sm: 3 }}>
            <OpSearch
              label="Employee"
              value={employeeSearch}
              onChange={setEmployeeSearch}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <OpSearch
              label="Operator Title"
              value={titleSearch}
              onChange={setTitleSearch}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <OpSearch
              label="Public ID"
              value={idSearch}
              onChange={setIdSearch}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <OpSelect
              label="Sort By"
              value={sortBy}
              onChange={setSortBy}
              direction={sortDirection}
              onToggleDirection={() =>
                setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
              }
            />
          </Grid>
        </Grid>
        {filteredOps.map((op) => {
          const matchingOperators = op.operators.filter((operator) =>
            `${operator.firstName} ${operator.lastName}`
              .toLowerCase()
              .includes(employeeSearch.toLowerCase()),
          );
          return <OpCard key={op.opId} op={op} operators={matchingOperators} />;
        })}
      </Container>
    </Box>
  );
}
