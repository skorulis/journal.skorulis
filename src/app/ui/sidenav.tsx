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
                                    <li><a href="#">June</a></li>
                                    <li><a href="#">July</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <footer id="footer">
                        <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </footer>

            </div>
        </div>
    )
}