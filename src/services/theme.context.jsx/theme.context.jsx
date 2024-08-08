import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themeValue = localStorage.getItem("theme");

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(themeValue ?? "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", themeValue);
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-bs-theme", "dark");

        }
        else {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-bs-theme", "light");
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};