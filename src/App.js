import React from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RoutesPages from "./routes/RoutesPages";

// Routes
import { 
    BrowserRouter,
} from "react-router-dom";

// Context
import UserProvider from "./context/User";

function App() {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header />
                    <UserProvider>
                        <RoutesPages />
                    </UserProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
