import { createContext, useState } from "react";

export const TranslationContext = createContext(null);

const tValue = localStorage.getItem("translation");

export const TranslationContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(tValue ?? "en");

    const changeLanguageHandler = (newLang) => {
        setLanguage(newLang);
        localStorage.setItem("translation", newLang);
    };


    return <TranslationContext.Provider value={{ language, changeLanguageHandler }}>
        {children}
    </TranslationContext.Provider>;
};