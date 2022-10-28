import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Configs from "./pages/Configs/Configs";

import { 
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/configs" element={<Configs />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
