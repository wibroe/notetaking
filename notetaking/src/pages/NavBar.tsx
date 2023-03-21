import { NavLink } from "react-router-dom";

export function NavBar() {
	return (
		<nav className="navbar-container navbar navbar-expand-lg navbar-light bg-light" >
			<ul className="navbar-nav mr-auto text-center">
				<li className="nav-item me-1 ">
			<NavLink to="/">
				Home
			</NavLink>

				</li>
				<li className="nav-item">
			<NavLink to="/about">
				About
			</NavLink>
					
				</li>

			</ul>
		</nav>
	)
}