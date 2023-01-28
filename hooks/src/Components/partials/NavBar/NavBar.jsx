import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<ul>
				{/* We use NavLink coz it helps to not relod all */}
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/goals'>Verdensmål</NavLink></li>
				<li><NavLink to='/Greeting'>Greeting</NavLink></li>
				<li><NavLink to='/Tall'>Tall</NavLink></li>
				<li><NavLink to='/Forms'>Forms</NavLink></li>
			</ul>			
		</nav>
	);
}

export default NavBar;