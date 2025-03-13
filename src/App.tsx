import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsPage from "./pages/Products/Product";
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent route wrapping all pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
