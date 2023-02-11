import {FC, useContext} from "react";

import {HeaderTypes} from "./Header.types";

import styles from './Header.style.module.sass';
import logo from '../../assets/img/logo.png';
import {ThemeContext, themes} from "../../contexts/ThemeContext";
import {Toggle} from "../UI/Toggle/Toggle";

export const Header: FC<HeaderTypes> = ({children}) => {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        if (theme === themes.dark) setTheme!('light')
        if (theme === themes.light) setTheme!('dark')
    }
    return (
        <header className={styles.header}>
            <img alt='logo' src={logo} className={styles.header__logo}/>
            <div className={styles.header__nav}>
                {children}
                <Toggle value={theme === themes.dark} onChange={changeTheme}/>
            </div>
        </header>
    )
}