import React, {Component, Fragment } from 'react';

import { UploadBox, Menu }  from './components/index'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
// import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";

export default class App extends Component {
  state = {
    title: "Face Morping",
    isDrawerOpen: false
  };

  menu;
  menuItems = [
    { label: "Home", icon: "menu", path: "/" },
    { label: "About", icon: "menu", path: "/about" }
  ];

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{this.state.title}</Typography>
          </Toolbar>
        </AppBar>
      <UploadBox/> 
      </Fragment>
    );
  }
}
