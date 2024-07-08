import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./assets/css/main.css";
import SideNav from "./sidenav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <main>
      
      <div id="wrapper">
					<div id="main">
						<div className="inner">
								<header id="header">
									<a href="index.html" className="logo"><strong>journal</strong>.skorulis.com</a>
									<ul className="icons">
										<li><a href="https://www.facebook.com/skorulis/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
										<li><a href="https://www.instagram.com/skorulis" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
										<li><a href="https://medium.com/@skorulis" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
									</ul>
								</header>
								<section id="banner">
									<div className="content">
                    {children}
									</div>
								</section>
						</div>
					</div>
          {SideNav()}
      </div>
    </main>
        
        <ScrollRestoration />
        <Scripts />
        <script src="js/jquery.min.js"></script>
			  <script src="js/browser.min.js"></script>
			  <script src="js/breakpoints.min.js"></script>
			  <script src="js/util.js"></script>
			  <script src="js/main.js"></script>  
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
