import { FaBars } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import "./Navbar.css";
import navLinks from "./data";
import { nanoid } from "nanoid";

const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="section-center nav-center">
                <ul className="left-links">
                    <li>
                        <h1 className="logo">
                            <DiAtom />
                            NovaLink
                        </h1>
                    </li>
                    {navLinks.map((navLink) => {
                        const { text, href } = navLink;
                        return (
                            <li key={nanoid()}>
                                <a href={href}>{text}</a>
                            </li>
                        );
                    })}
                    <li className="toggle-btn">
                        <a href="#">
                            <FaBars />
                        </a>
                    </li>
                </ul>
                <ul className="right-links">
                    <li>
                        <a href="#">Downlaod app</a>
                    </li>
                    <li>
                        <div className="vertical-border"></div>
                    </li>
                    <li>
                        <a href="#">Log in</a>
                    </li>
                    <li>
                        <a className="btn btn-primary" href="#">
                            Sign up
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
