import React, { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./stylesheet.scss";
import SPSSCard from "./components/spssCard";
import Header from "./components/header";
import Footer from "./components/footer";
import {
  CssBaseline,
  AppBar,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Toolbar,
  Tooltip,
} from "@mui/material";

export const App: React.FC = () => {
  return (
    <Grid container>
      <div
        style={{
          background:
            "linear-gradient(to bottom, #385387, #212d61 30%, #040c3c)",
        }}
      >
        <CssBaseline />
        <Grid>
          <Header />
        </Grid>
        <div style={{ height: 80 }} />
        <Grid container justifyContent="center" padding={5}>
          <Grid xs={12}>
            <Card sx={{ m: 1.5 }}>
              <CardContent>
                <Typography variant="h1" fontSize={20} margin={2}>
                  夏のプログラミング勉強会2022 (SPSS2022)へようこそ!
                </Typography>
                <Divider />
                <Typography
                  component="p"
                  fontSize={12}
                  marginBottom={1}
                  marginTop={1}
                >
                  SPSS(Summer Program Study
                  Session)ではプログラミング初学者に向けた勉強会を行います
                </Typography>
                <Typography component="p" fontSize={12} marginBottom={1}>
                  8月15日(月)〜8月26日(金)の計10日間でプログラミングに触れることができます
                </Typography>
                <Typography component="p" fontSize={12} marginBottom={1}>
                  また、この勉強会はconnpassで開かれました
                </Typography>
                <CardActionArea
                  href="https://connpass.com/event/256815/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tooltip title="connpassで見てみる">
                    <CardMedia
                      component="img"
                      height="500"
                      image="https://aruminium.github.io/SPSS2022/SPSS2022.png"
                      alt="connpass"
                    />
                  </Tooltip>
                </CardActionArea>
              </CardContent>
            </Card>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day1/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day1/img/SPSS2022day1.png"
                  title="day1 環境構築"
                  desc="プログラミングを行うためには、環境構築が必要になる。day1では環境構築を行っていく"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day2/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day2/img/SPSS2022day2.png"
                  title="day2 Python"
                  desc="Pythonについてざっと勉強する"
                ></SPSSCard>
              </Grid>
              {/* </Grid> */}
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day3/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day3/img/SPSS2022day3.png"
                  title="day3 Java"
                  desc="Javaについてざっと勉強する。主に設計の話になります"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day4/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day4/img/SPSS2022day4.png"
                  title="day4 Docker+SQL"
                  desc="DockerでMySQL環境を構築し、試してみる"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day5/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day5/img/SPSS2022day5.png"
                  title="day5 LineBot"
                  desc="LineBotで構築し、バックエンドについて理解する"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day6/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day6/img/SPSS2022day6.png"
                  title="day6 HTML+CSS"
                  desc="フロントエンドの基礎 HTMLとCSSについて理解する"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day7/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day7/img/SPSS2022day7.png"
                  title="day7 React.js"
                  desc="React.jsでモダンなフロントエンド開発"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day8/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day8/img/SPSS2022day8.png"
                  title="day8 UIフレームワーク+Figma"
                  desc="UIフレームワークとFigmaで更にモダンなフロントエンド開発"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day9/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day9/img/SPSS2022day9.png"
                  title="day9 デプロイ"
                  desc="Comming Soon"
                ></SPSSCard>
              </Grid>
              <Grid xs={12} sm={6} lg={4}>
                <SPSSCard
                  URL="https://aruminium.github.io/SPSS2022/day10/index.html#0"
                  imgSRC="https://aruminium.github.io/SPSS2022/day10/img/SPSS2022day10.png"
                  title="day10 ポートフォリオサイト"
                  desc="Comming Soon"
                ></SPSSCard>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </div>
    </Grid>
  );
};
