import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import menu from "../assets/menu.png";
import about from "../assets/navbar/about.svg";
import help from "../assets/navbar/help.svg";
import home from "../assets/navbar/home.svg";
import search from "../assets/navbar/search.svg";
import handshake from "../assets/navbar/agreement.svg";

const iconList = [home, help, about];
const actionIconList = [handshake, search];
const routes = ["/donate", "/search"];

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function Navbar() {
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

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Help", "About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <img
                src={iconList[index]}
                alt={iconList[index]}
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 25,
                  position: "relative",
                  top: 10,
                }}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Join Us", "Search Donor"].map((text, index) => (
          <Link
            to={routes[index]}
            style={{ textDecoration: "none", color: "black" }}
            key={index}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                <img
                  src={actionIconList[index]}
                  alt={actionIconList[index]}
                  style={{
                    height: 30,
                    width: 30,
                    marginBottom: 25,
                    position: "relative",
                    top: 10,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 32,
              width: 32,
              marginTop: 10,
              marginLeft: 5,
            }}
          >
            <img
              src={menu}
              alt="menu"
              style={{
                height: 32,
                width: 32,
                marginTop: 10,
                marginLeft: 5,
                color: "white",
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
