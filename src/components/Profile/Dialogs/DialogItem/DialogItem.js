import React from 'react';
import classes from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = props => (
	<div className={classes.dialogItem} id={props.id} key={props.id}>
		<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
	</div>
);

export default DialogItem;
