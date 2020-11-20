import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Test from "./test";
import Main from "./main";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/test" component={Test} />
      </BrowserRouter>
    </>
  );
};

export default Root;
