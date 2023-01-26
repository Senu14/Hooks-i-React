import { NavLink } from "react-router-dom";
const Nav = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/'></NavLink></li>
				<li><NavLink to='/Form'>Kontaktformular</NavLink></li>
				<li><NavLink to='/goals'>De 17 verdensmål</NavLink></li>
			</ul>			
		</nav>
	);
}

export default Nav;