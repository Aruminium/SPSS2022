import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Tooltip,
  createTheme,
  ThemeProvider,
  Divider,
} from "@mui/material";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#385387",
    },
  },
});

type Anchor = "left";
type listType = {
  title: string;
  url: string;
};

const listItem: listType[] = [
  {
    title: "環境構築",
    url: "https://aruminium.github.io/SPSS2022/day1/index.html#0",
  },
  {
    title: "Python",
    url: "https://aruminium.github.io/SPSS2022/day2/index.html#0",
  },
  {
    title: "Java",
    url: "https://aruminium.github.io/SPSS2022/day3/index.html#0",
  },
  {
    title: "Docker+SQL",
    url: "https://aruminium.github.io/SPSS2022/day4/index.html#0",
  },
  {
    title: "LineBot",
    url: "https://aruminium.github.io/SPSS2022/day5/index.html#0",
  },
  {
    title: "HTML+CSS",
    url: "https://aruminium.github.io/SPSS2022/day6/index.html#0",
  },
  {
    title: "React.js",
    url: "https://aruminium.github.io/SPSS2022/day7/index.html#0",
  },
  {
    title: "UIフレームワーク+Figma",
    url: "https://aruminium.github.io/SPSS2022/day8/index.html#0",
  },
  {
    title: "デプロイ",
    url: "https://aruminium.github.io/SPSS2022/day9/index.html#0",
  },
  {
    title: "ポートフォリオサイト",
    url: "https://aruminium.github.io/SPSS2022/day10/index.html#0",
  },
];

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [state, setState] = React.useState({
    left: false,
  });
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      bgcolor="#212d61"
      color="white"
      height="100%"
    >
      <div style={{ opacity: 0.7, fontWeight: "bold" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <KeyboardReturnIcon />
              <ListItemText primary="戻る" />
            </ListItemButton>
            <Divider />
          </ListItem>
        </List>
        <List>
          {listItem.map((item: listType, index: number) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  open(item.url, "_blank", "noopener noreferrer");
                }}
              >
                <ListItemText
                  primary={"day" + (index + 1) + " - " + item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleMenu = () => {
    open(
      "https://twitter.com/Aruminium_Bana7",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box zIndex={1} width="100%">
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SPSS2022 - 夏のプログラミング勉強会
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Tooltip title="主催者のTwitterを見る">
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1505079325879529474/6FT3q5Ft_400x400.jpg"
                    alt="Bana7"
                  />
                </Tooltip>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Drawer
                  anchor="left"
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
