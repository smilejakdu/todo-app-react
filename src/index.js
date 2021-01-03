import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Route, Link} from "react-router-dom";
import App from "./App";


ReactDOM.render(
    <Route>
            <App/>
    </Route>,
    document.getElementById("root")
);
