// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav";
// import ProductCard from "./components/ProductCard";
// import CardSlider from "./components/CardSlider";
import LandingPage from "./pages/LandingPage";
// import { useEffect, useState } from "react";

function App() {
  return (
    <main className="pt-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topPicks" element={<h1>Top Pics</h1>} />
        <Route path="/trending" element={<h1>Trending</h1>} />
      </Routes>
    </main>
  );
}

export default App;
