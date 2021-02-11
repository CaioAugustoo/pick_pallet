import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import PalletDetail from "./pages/PalletDetail/PalletDetail";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="pallet/:id" element={<PalletDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
