import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
	return (
		<header className={classes.Header}>
			<div>
				<img src="./img/logo.png" alt="Logo"></img>
			</div>
			<h1>
				Гав-гав - самая популярная социальная сеть <br />
				для домашних животных в мире
			</h1>
		</header>
	);
};
export default Header;
