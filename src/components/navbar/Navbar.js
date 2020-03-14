import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = props => {
	return (
		<nav className={classes.Navbar}>
			<ul>
				<li>
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs">Messages</NavLink>
				</li>
				<li>
					<NavLink to="/news">News</NavLink>
				</li>
				<li>
					<NavLink to="/music">Music</NavLink>
				</li>
				<li>
					<NavLink to="/settings">Settings</NavLink>
				</li>
				<Friends friends={props.friends} />
			</ul>
		</nav>
	);
};

export default Navbar;
