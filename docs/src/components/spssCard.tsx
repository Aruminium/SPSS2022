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
import {TwitterIntentTweet} from "./twitterIntentTweet";
import Tooltip from '@mui/material/Tooltip';

type SpssCard = {
  URL: string;
  imgSRC: string;
  title: string;
  desc: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SPSSCard = (props: SpssCard) => {
  return (
    <Grid direction="row">
      <Item>
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <a
              href={props.URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
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
            </a>
          </CardActionArea>
          <CardActions>
            <Tooltip title="Twitterで共有する">
              <TwitterIntentTweet url={props.URL} text={props.title + " を勉強しました！"} hashtags={["SPSS2022", "勉強会"]} >
                <TwitterIcon></TwitterIcon>
              </TwitterIntentTweet>
            </Tooltip>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
};

export default SPSSCard;
