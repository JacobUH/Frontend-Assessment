import { Card, CardContent, Typography } from "@mui/material";
import { Op } from "../types/ops";
import OperatorRow from "./OperatorRow";

interface Props {
  op: Op;
}

export default function OpCard({ op }: Props) {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6">{op.opTitle}</Typography>
        <Typography>Public ID: {op.publicId}</Typography>
        <Typography>Operators Needed: {op.operatorsNeeded}</Typography>
        <Typography>
          {new Date(op.startTime).toLocaleTimeString()} -{" "}
          {new Date(op.endTime).toLocaleTimeString()}
        </Typography>
        {op.operators.map((operator) => (
          <OperatorRow key={operator.id} operator={operator} />
        ))}
      </CardContent>
    </Card>
  );
}
