import React, { createContext, useState } from "react";

export const User = createContext();

export default function UserProvider({ children }) {
    const [isFirstLogin, setIsFirstLogin] = useState(false);
    const [modalWelcome, setModalWelcome] = useState(false);
    const [statusNumber, setStatusNumber] = useState(84);

    return (
        <User.Provider value={{ isFirstLogin, setIsFirstLogin, statusNumber, setStatusNumber, modalWelcome, setModalWelcome }}>
            { children }
        </User.Provider>
    )
}
