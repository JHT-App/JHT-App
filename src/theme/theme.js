import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f4f4f9",
    },
    text: {
      primary: "#999",
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});

export default theme;
