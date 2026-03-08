import { useEffect, useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { Operator } from "../types/ops";
import { getCheckInStatus, toggleCheckIn } from "@/utils/localStorage";

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
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={1}
      borderBottom="1px solid #eee"
    >
      <Typography>
        {operator.firstName} {operator.lastName}
      </Typography>
      <Typography>Ops: {operator.opsCompleted}</Typography>
      <Typography>
        Reliability: {(operator.reliability * 100).toFixed(0)}%
      </Typography>
      <Box>
        {operator.endorsements.map((e) => (
          <Chip key={e} label={e} size="small" sx={{ mr: 1 }} />
        ))}
      </Box>
      <Button
        variant="contained"
        color={checkedIn ? "success" : "inherit"}
        onClick={handleToggle}
      >
        {checkedIn ? "Checked In" : "Checked Out"}
      </Button>
    </Box>
  );
}
