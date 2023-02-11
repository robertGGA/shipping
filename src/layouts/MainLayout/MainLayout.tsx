import {Header} from "../../components";
import styles from './MainLayout.style.module.sass';
import {NavLink, Outlet} from "react-router-dom";
import {ContactUs} from "../../components/ContactsUs/ContactUs";

export const MainLayout = () => {
    return (
        <>
            <div className={styles.layout}>
                <Header>
                    <nav>
                        <NavLink
                            to={'/'}
                            className={({isActive}) =>
                                isActive ? styles.link_active : styles.link
                            }>
                            Home
                        </NavLink>

                        <NavLink
                            to={'/service'}
                            className={({isActive}) =>
                                isActive ? styles.link_active : styles.link
                            }>
                            Service
                        </NavLink>

                        <NavLink
                            to={'/contacts'}
                            className={({isActive}) =>
                                isActive ? styles.link_active : styles.link
                            }>
                            Contacts
                        </NavLink>
                    </nav>
                </Header>
                <Outlet/>
            </div>
            <ContactUs/>
        </>
    )
}