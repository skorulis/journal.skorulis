"use client";
import SideNav from "./ui/sidenav";

export default function Home() {

  return (
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
										<h2>Journal</h2>
										<p>This is a mix of my journal, calendar todo list all put together that I keep in notion pages which are then scraped into this web version. 
											I don't have a good reason why I did this, it just seemed like a good idea at the time.
										</p>
									</div>
								</section>
						</div>
					</div>
          {SideNav()}
      </div>
    </main>
  );
}
