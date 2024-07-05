import {Journal} from "./journal";

export function generateStaticParams() {
    return [{monthyear: "june2024"}, {monthyear: "july2024"}]
  }

import SideNav from "../ui/sidenav";

export default function MonthPage() {

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
                                    {Journal({filename: "june2024"})}
									</div>
								</section>
						</div>
					</div>
          {SideNav()}
      </div>
    </main>
  );
}
