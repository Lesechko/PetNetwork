import React from 'react';
import classes from './Message.module.scss';

const Message = props => (
	<div className={classes.message} id={props.id}>
		{props.message}
	</div>
);

export default Message;
