import React from "react";
import { Card, CardContent, Stack, Tooltip, Typography } from "@mui/material";
import { Op, Operator } from "../types/ops";
import OperatorRow from "./OperatorRow";
import colors from "@/theme/colors";

interface Props {
  op: Op;
  operators: Operator[];
}

export default function OpCard({ op, operators }: Props) {
  return (
    <Card sx={{ marginBottom: 3, backgroundColor: colors.accent }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h3" color="white">
            {op.opTitle}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" color="white">
          <Typography>Public ID: {op.publicId}</Typography>
          <Typography>•</Typography>
          <Typography>Operators Needed: {op.operatorsNeeded}</Typography>
          <Typography>•</Typography>
          <Typography color="white">
            {new Date(op.startTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(op.endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Stack>
        {operators.map((operator) => (
          <OperatorRow key={operator.id} operator={operator} />
        ))}
      </CardContent>
    </Card>
  );
}
