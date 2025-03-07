import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PropertyProvider } from "./context/PropertyContext";

const App = () => {
  return (
    <PropertyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
};

export default App;
