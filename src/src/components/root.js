import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FaceRekognition from "./facerekog";
import Main from "../components/main";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "../assets/css/Dal.css";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <a href="/" className="main-nav">
              메인화면
            </a>
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/reko" component={FaceRekognition} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Root;
