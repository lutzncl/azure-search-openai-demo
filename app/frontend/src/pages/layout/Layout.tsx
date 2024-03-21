import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/WelshZCH.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                <a href="https://zerocarbonhwb.cymru/knowledge-hwb/" target={"_blank"} title="Welsh Zero Carbon Knowledge Hwb">
                        <img
                            src={github}
                            alt="WelshZCH logo"
                            aria-label="Link to WelshZCH logo"
                            width="100px"
                            height="60px"
                            className={styles.githubLogo}
                        />
                    </a>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
