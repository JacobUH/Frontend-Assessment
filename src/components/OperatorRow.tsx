import { useEffect, useState } from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { Operator } from "../types/ops";
import { getCheckInStatus, toggleCheckIn } from "@/utils/localStorage";
import colors from "@/theme/colors";

interface Props {
  operator: Operator;
}

export default function OperatorRow({ operator }: Props) {
  const [checkedIn, setCheckedIn] = useState(false);

  function handleToggle() {
    const status = toggleCheckIn(operator.id);
    setCheckedIn(status);
  }

  useEffect(() => {
    setCheckedIn(!!getCheckInStatus(operator.id));
  }, []);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ py: 1, borderBottom: `1px solid ${colors.secondary}` }}
    >
      <Grid size={{ xs: 12, sm: 3 }}>
        <Typography color="white">
          {operator.firstName} {operator.lastName}
        </Typography>
      </Grid>
      <Grid size={{ xs: 6, sm: 1 }}>
        <Typography color="white">Ops: {operator.opsCompleted}</Typography>
      </Grid>

      <Grid size={{ xs: 6, sm: 2 }}>
        <Typography color="white">
          Reliability: {(operator.reliability * 100).toFixed(0)}%
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {operator.endorsements.map((e) => (
            <Chip
              key={e}
              label={e}
              size="small"
              sx={{ backgroundColor: colors.secondary, color: "white" }}
            />
          ))}
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: checkedIn ? colors.primary : colors.secondary,
          }}
          onClick={handleToggle}
        >
          {checkedIn ? "Checked In" : "Checked Out"}
        </Button>
      </Grid>
    </Grid>
  );
}
