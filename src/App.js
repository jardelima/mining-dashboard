import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Wrapper from "./components/Wrapper/Wrapper";
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
                    <Wrapper>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Wrapper>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
