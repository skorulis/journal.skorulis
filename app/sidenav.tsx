import React from "react";
import { useMediaQuery } from 'react-responsive';

import {
    Link,
  } from "@remix-run/react";

export default function SideNav() {
    const startOpen = useMediaQuery({ query: '(min-width: 768px)' });
    const [isOpen, setIsOpen] = React.useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(startOpen);

    function openerClass(): string {
        return isOpen ? "opener active" : "opener"
    }
    function sidebaseClass(): string {
        return isSidebarOpen ? "" : "inactive"
    }

    function toggleMenu() {
        setIsOpen((open) => !open)
    }
    function toggleSidebar() {
        setIsSidebarOpen((open) => !open)
    }


    return (
        <div id="sidebar" className={sidebaseClass()}>
            <a className="toggle" onClick={toggleSidebar}>Toggle</a>

            <div className="inner">
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <span className={openerClass()} onClick={toggleMenu}>2024</span>
                                <ul>
                                    <li><Link to="/june2024">June</Link></li>
                                    <li><Link to="/july2024">July</Link></li>
                                    <li><Link to="/august2024">August</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <footer id="footer">
                        <p className="copyright">&copy; Alex Skorulis. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </footer>

            </div>
        </div>
    )
}