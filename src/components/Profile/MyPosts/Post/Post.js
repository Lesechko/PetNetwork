import React from 'react';
import classes from './Post.module.scss';

const Post = ({message, id, like = 0}) => {
	return (
		<div className={classes.Post} id={id}>
			<div className={classes.fotoWrapper}>
				<img src="./img/mainFoto.png" alt="post foto" />
			</div>
			<p>{message}</p>
			<div className={classes.likeBtn}>
				<button>Like</button>
				<span>{like}</span>
			</div>
		</div>
	);
};

export default Post;
