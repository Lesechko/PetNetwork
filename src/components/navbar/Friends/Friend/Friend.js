import React from 'react';
import classes from './Friend.module.scss';
import {NavLink} from 'react-router-dom';

const Friend = props => (
	<div className={classes.friend}>
		<div className={classes.foto}>
			<NavLink to={'friend/' + props.id}>
				<img src={props.foto} alt="user foto" />
			</NavLink>
		</div>

		<p className={classes.name}>{props.name}</p>
	</div>
);

export default Friend;
