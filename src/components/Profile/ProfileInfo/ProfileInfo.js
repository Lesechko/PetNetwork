import React from 'react';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = props => (
	<main className={classes.Profile}>
		<div className={classes.foto}>
			<img src="./img/mainFoto.png" alt="main foto" />
		</div>
		<div className={classes.info}>
			<h2>Martin</h2>
			<ul>
				<li>Date of birth: </li>
				<li>City: </li>
				<li>Educatiion: </li>
				<li>Web Site: </li>
			</ul>
		</div>
	</main>
);

export default ProfileInfo;
