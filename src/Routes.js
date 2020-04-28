import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./Components/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/index" component={Index} />
    </BrowserRouter>
  );
};

export default Routes;
