import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./stylesheet.scss";
import SPSSCard from "./components/spssCard";
import Header from "./components/header";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";

export const App: React.FC = () => {
    return (
    <div>
      <CssBaseline />
      <Header/>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day1/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day1/img/SPSS2022day1.png"
            title="day1 環境構築"
            desc="プログラミングを行うためには、環境構築が必要になる。day1では環境構築を行っていく"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day2/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day2/img/SPSS2022day2.png"
            title="day2 Python"
            desc="Pythonについてざっと勉強する"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day4/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day4/img/SPSS2022day4.png"
            title="day4 Docker+SQL"
            desc="DockerでMySQL環境を構築し、試してみる"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day5/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day5/img/SPSS2022day5.png"
            title="day5 LineBot"
            desc="LineBotで構築し、バックエンドについて理解する"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
          <SPSSCard
            URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
            imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
            title="day3 Java"
            desc="Javaについてざっと勉強する。主に設計の話になります"
          ></SPSSCard>
        </Grid>
      </Container>
    </div>
  );
};
