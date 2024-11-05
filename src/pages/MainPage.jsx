import React from "react";
import Header from "../components/Header";
import "./style";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

// export default function FixedContainer() {
//   return (

//   );
// }
const MainPage = () => {
  return (
    <>
      <Header />

      <Container fixed>
        <Typography variant="h1" component="h2">
          Bank of System Design
        </Typography>
        <h1>this is the main page</h1>
      </Container>
    </>
  );
};

export default MainPage;
