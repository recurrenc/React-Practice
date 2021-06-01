import React from "react";
import clsx from "clsx";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import GitHubIcon from "@material-ui/icons/GitHub";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
// import MailIcon from "@material-ui/icons/Mail";
import MainNav from "./MainNav";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Side() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const options = ["Home", "Github Status", "Life Event", "Acheivements"];
  const optionsIcons = [
    <HomeIcon />,
    <GitHubIcon />,
    <EventAvailableIcon />,
    <EqualizerIcon />,
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Router>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <List>
            <ListItem button key="Home">
              <ListItemIcon>{optionsIcons[0]}</ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </List>
        </Link>
        <Link
          to="/gitstat"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <List>
            <ListItem button key="Github Status">
              <ListItemIcon>{optionsIcons[1]}</ListItemIcon>
              <ListItemText primary={"Github Status"} />
            </ListItem>
          </List>
        </Link>

        <Link
          to="/lifeEvent"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <List>
            <ListItem button key="Life Event">
              <ListItemIcon>{optionsIcons[2]}</ListItemIcon>
              <ListItemText primary={"Life Event"} />
            </ListItem>
          </List>
        </Link>

        <Link
          to="/acheivements"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <List>
            <ListItem button key="Acheivements">
              <ListItemIcon>{optionsIcons[3]}</ListItemIcon>
              <ListItemText primary={"Acheivements"} />
            </ListItem>
          </List>
        </Link>
      </Router>

      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <MainNav onClick={toggleDrawer("left", true)} />
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
