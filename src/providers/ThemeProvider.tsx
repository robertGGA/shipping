import {ThemeContext, themes} from "../contexts/ThemeContext";
import React, { ReactNode, useEffect, useState} from "react";

type ThemeProviderConfig = {
    children: ReactNode
}

export const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;

    if (Object.values(themes).includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) return themes.light;

    return themes.dark;
}

const ThemeProvider: React.FC<ThemeProviderConfig> = ({children}) => {
    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider