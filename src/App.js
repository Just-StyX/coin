import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Coin from "./component/Coin";
import History from "./component/History";
import Navbar from "./component/Navbar";

const App = () => {
    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Coin />} />
                    <Route path="/history/:symbol" element={<History />} />
                </Routes>
            </BrowserRouter>
        
    );
};

export default App;
