import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TwitterIntentTweet } from "./twitterIntentTweet";
import Tooltip from "@mui/material/Tooltip";

type SpssCard = {
  URL: string;
  imgSRC: string;
  title: string;
  desc: string;
};

const SPSSCard = (props: SpssCard) => {
  return (
    <Card sx={{ m: 1.5 }}>
      <CardActionArea
        href={props.URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          height="300"
          image={props.imgSRC}
          alt={props.desc}
        />
        <CardContent sx={{ height: 100 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Twitterで共有する">
          <TwitterIntentTweet
            url={props.URL}
            text={props.title + " を勉強しました！"}
            hashtags={["SPSS2022", "勉強会"]}
          >
            <TwitterIcon></TwitterIcon>
          </TwitterIntentTweet>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default SPSSCard;
