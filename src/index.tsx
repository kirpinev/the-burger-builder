import React, { FC } from "react";
import ReactDOM from "react-dom";

import { App } from "./views/App";

import { GlobalStyle } from "./styles/GlobalStyle";

const Main: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
