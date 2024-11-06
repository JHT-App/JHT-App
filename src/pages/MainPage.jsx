import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./mainPageStyle";

import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import QuestionsTable from "../components/QuestionsTable";
import getAllQuestions from "../api/getAllQuestions";

import bank from "../assets/bank.png";

const MainPage = () => {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const result = await getAllQuestions();
      setQuestions(result);
      console.log("result", result);
      console.log("questions", questions);
    };
    loadData();
  }, []);
  return (
    <>
      <Navbar />
      <Container fixed>
        <div className="main-headline">
          <img src={bank} className="bank-logo" />
          <Typography variant="h2" component="h2">
            Bank of System Design
          </Typography>
        </div>
        <Typography variant="h3" component="h3" sx={{ marginTop: "3rem" }}>
          Problems
        </Typography>
        <Typography variant="h5" component="h5">
          Select a System Design problem you'd like to work on!
        </Typography>
        {questions ? <QuestionsTable rows={questions} /> : null}
      </Container>
    </>
  );
};

export default MainPage;
