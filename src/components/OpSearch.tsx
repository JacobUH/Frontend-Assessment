import colors from "@/theme/colors";
import { Box, TextField } from "@mui/material";

interface OpSearchProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function OpSearch({ label, value, onChange }: OpSearchProps) {
  return (
    <Box sx={{ my: 3 }}>
      <TextField
        variant="filled"
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        sx={{
          borderRadius: 1,
          "& .MuiFilledInput-root": {
            backgroundColor: colors.accent,
          },
          "& .MuiFilledInput-input": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiFilledInput-input::placeholder": {
            color: "white",
            opacity: 1,
          },
          "& .MuiFilledInput-underline:hover:before": {
            borderBottomColor: "white",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: `${colors.primary}`,
          },
        }}
      />
    </Box>
  );
}
