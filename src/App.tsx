// App.tsx (CORRECTED - No Router here)
import React from "react";
import { Route, Routes } from "react-router-dom"; // No BrowserRouter import
import "./App.css";
import ProductsPage from "./pages/Products/Product";

import CartPage from "./pages/Cart/Cart";
import Layout from "./components/common/Layout/Layout";

function App() {
  return (
    // No Router wrapper here!
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
    // No Router wrapper here!
  );
}

export default App;
