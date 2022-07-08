import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

const App = () => {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
