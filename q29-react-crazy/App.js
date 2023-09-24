// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubjectIndex from "./SubjectIndex";
import FSDContent from "./FSDContent";
import PythonContent from "./PythonContent";
import NoPage from "./NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubjectIndex/>} />
        <Route path="/subjects/1" element={<FSDContent/>} />
        <Route path="/subjects/2" element={<PythonContent/>} />
        <Route element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
