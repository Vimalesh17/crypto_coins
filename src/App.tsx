import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CryptoTable from "./components/crypto_table";
import CoinDetails from "./components/coindetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoTable></CryptoTable>}></Route>
          <Route path="details" element={<CoinDetails></CoinDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
