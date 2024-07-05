export default function SideNav() {
    return (
        <div id="sidebar">
            <div className="inner">
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>
                                <span className="opener">2024</span>
                                <ul>
                                    <li><a href="/june2024">June</a></li>
                                    <li><a href="/july2024">July</a></li>
                                    <li><a href="/august2024">August</a></li>
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