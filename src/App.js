import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Navigations } from "./navigations";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navigations} />
    </BrowserRouter>
  );
}

export default App;
