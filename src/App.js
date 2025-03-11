import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import EgresadoList from "./components/EgresadoList";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirigir la raíz ("/") a "/egresados" */}
        <Route path="/" element={<Navigate to="/egresados" />} />
        <Route path="/egresados" element={<EgresadoList />} />
      </Routes>
    </Router>
  );
};

export default App;
