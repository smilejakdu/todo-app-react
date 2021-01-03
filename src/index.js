import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Route, Link} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./moduls"

const store = createStore(rootReducer);

ReactDOM.render(
    <Route>
        <Provider store={store}>
            <App/>
        </Provider>
    </Route>,
    document.getElementById("root")
);
