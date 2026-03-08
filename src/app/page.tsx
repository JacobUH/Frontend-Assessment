"use client";
import OpCard from "@/components/OpCard";
import { useOps } from "@/hooks/useOps";
import {
  Alert,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const { ops, loading, error } = useOps();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Available Ops
      </Typography>

      {ops.map((op) => (
        <OpCard key={op.opId} op={op} />
      ))}
    </Container>
  );
}
