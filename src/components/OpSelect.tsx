import colors from "@/theme/colors";
import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from "@mui/material";

interface OpSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  direction: "asc" | "desc";
  onToggleDirection: () => void;
}

export default function OpSelect({
  label,
  value,
  onChange,
  direction,
  onToggleDirection,
}: OpSelectProps) {
  return (
    <Box sx={{ my: 3, display: "flex", gap: 2 }}>
      <FormControl
        sx={{
          width: "100%",
          borderRadius: 1,

          "& .MuiFilledInput-root": {
            backgroundColor: colors.accent,
          },
          "& .MuiFilledInput-root:hover": {
            backgroundColor: "#1a1a1a",
          },
          "& .MuiSelect-select": {
            color: "white",
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingTop: "16px",
            paddingBottom: "16px",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiFilledInput-underline:hover:before": {
            borderBottomColor: "white",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: colors.primary,
          },
        }}
      >
        <InputLabel id="sort-label">{label}</InputLabel>
        <Select
          variant="filled"
          labelId="sort-label"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: colors.accent,
                color: "white",
              },
            },
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="firstname">First Name</MenuItem>
          <MenuItem value="lastname">Last Name</MenuItem>
          <MenuItem value="opsCompleted">Ops Completed</MenuItem>
          <MenuItem value="reliability">Reliability</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        onClick={onToggleDirection}
        sx={{
          width: 56,
          height: 56,
          borderRadius: 1,
          backgroundColor: colors.accent,
          color: "white",
          p: 0,
        }}
      >
        {direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </Box>
  );
}
