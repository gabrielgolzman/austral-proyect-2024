import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../../../services/theme.context.jsx/theme.context";

const ToggleTheme = ({ className }) => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    return (
        <Button className={className} onClick={toggleTheme}> Cambiar a tema {theme === "light" ? "oscuro" : "claro"}</Button>
    );
};

export default ToggleTheme;