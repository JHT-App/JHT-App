import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#95dfb3",
    },
    secondary: {
      main: "#c9317d",
      contrastText: "#eee",
    },
    background: {
      default: "#f4f4f9",
    },
    text: {
      primary: "#444",
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});

export default theme;
