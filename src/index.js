import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/index";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import 'react-alice-carousel/lib/alice-carousel.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Router>
        <Root />
      </Router>
    </>
  </React.StrictMode>
);
