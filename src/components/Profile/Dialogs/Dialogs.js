import React from 'react';
import classes from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = props => {
	return (
		<div className={classes.Dialogs}>
			<div className={classes.dialogsItem}>
				{props.dialogs.map(dialog => (
					<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
				))}
			</div>

			<div className={classes.messagesItem}>
				{props.messages.map(msg => (
					<Message message={msg.message} id={msg.id} key={msg.id} />
				))}
			</div>
		</div> 
	);
};

export default Dialogs;
