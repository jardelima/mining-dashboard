import React from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Configs from "./pages/Configs/Configs";
import Registers from "./pages/Registers/Registers";
import Reports from "./pages/Reports/Reports";

// Singles
import SingleGenders from "./pages/SingleGenders/SingleGenders";
import SingleGraphicGenders from "./pages/SingleGraphicGenders/SingleGraphicGenders";
import SingleNPS from "./pages/SingleNPS/SingleNPS";
import SingleBoxAttributesNegatives from "./pages/SingleBoxAttributesNegatives/SingleBoxAttributesNegatives";
import SingleBoxAttributesPositives from "./pages/SingleBoxAttributesPositives/SingleBoxAttributesPositives";
import SingleAttributesPositives from "./pages/SingleAttributesPositives/SingleAttributesPositives";
import SingleAttributesNegatives from "./pages/SingleAttributesNegatives/SingleAttributesNegatives";

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
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/configs" element={<Configs />} />
                        <Route path="/registers" element={<Registers />} />
                        <Route path="/graphic-nps" element={<SingleNPS />} />
                        <Route path="/positives-attributes" element={<SingleBoxAttributesPositives />} />
                        <Route path="/registers/positives-attributes" element={<SingleAttributesPositives />} />
                        <Route path="/negatives-attributes" element={<SingleBoxAttributesNegatives />} />
                        <Route path="/registers/negatives-attributes" element={<SingleAttributesNegatives />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/genders" element={<SingleGenders />} />
                        <Route path="/genders/graphic-genders" element={<SingleGraphicGenders />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
