import React from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Configs from "./pages/Configs/Configs";
import Registers from "./pages/Registers/Registers";

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
                        <Route path="/registers" element={<Registers />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
