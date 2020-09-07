import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import "regenerator-runtime/runtime";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams></SearchParams>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
