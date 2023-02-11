import ThemeProvider from "../../providers/ThemeProvider";
import {Outlet} from "react-router-dom";

export const ContextLayout = () => {
    return (
        <ThemeProvider>
            <Outlet/>
        </ThemeProvider>
    )
}