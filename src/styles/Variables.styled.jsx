import { createTheme } from "@mui/material/styles";

export const themeColors = {
  $colorHex1: "#6677d9",
  $colorHex2: "#364573",
  $colorHex3: "#292f40",
  $colorHex4: "#03a688",
  $colorHex5: "#f2ae2e",
  $colorHex6: "#ff4640",
  $linkColor: "#3abdff",
  $selectionColor: "#816eff",
};
export const btn = {
  create: "#03a688",
  clear: "#ff4640",
  load: "#FF9D00",
  lightenShade: 32,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: btn.create,
    },
    secondary: {
      main: "#59fe9e",
    },
  },
});
