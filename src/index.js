import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import DataProvider from "./context/DataContext";
import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import FilterProvider from "./context/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <FilterProvider>
            <App />
        </FilterProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
