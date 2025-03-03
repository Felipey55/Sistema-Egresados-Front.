import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EgresadoList from "./components/EgresadoList";
import MyNavbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/egresados" element={<EgresadoList />} />
      </Routes>
    </Router>
  );
};


export default App;
