import React from 'react';
import classes from './Friends.module.scss';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = props => {
	return (
		<li className={classes.friends}>
			<NavLink to="friends">Friends</NavLink>
			<div className={classes.friensBlock}>
				{props.friends.map(el => (
					<Friend name={el.name} foto={el.foto} id={el.id} key={el.id} />
				))}
			</div>
		</li>
	);
};

export default Friends;
