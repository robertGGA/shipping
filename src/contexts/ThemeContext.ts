import React from "react";
import {getTheme} from "../providers/ThemeProvider";

export const themes = {
    dark: 'dark',
    light: 'light'
}

type ThemeContextConfig = {
    theme: string
    setTheme?: Function
}

const initValues = {
    theme: getTheme()
}

export const ThemeContext = React.createContext<ThemeContextConfig>(initValues);