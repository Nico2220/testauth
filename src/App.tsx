import React, { FormEvent, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";

import Login from "./Login";
import Guard from "./Guard";
import { Home } from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Guard>
              <Home />
            </Guard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
