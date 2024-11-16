import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//import express from "express";
//import db from "./dbUtils/con.mjs";
//import { ObjectId } from "mongodb";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
