import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPost = props => {
	const newPostElement = React.createRef();

	const addPostHandler = () => {
		props.AddPost();
	};

	const onPostChange = event => {
		props.apdatePost(event.target.value);
	};

	return (
		<div className={classes.MyPost}>
			<h2>Add posts </h2>
			<div>
				<input
					type="text"
					ref={newPostElement}
					onChange={onPostChange}
					value={props.value}
				/>
				<input type="submit" onClick={addPostHandler} />
			</div>
			<div className={classes.post}>
				{props.posts.map(({message, id, like}) => (
					<Post message={message} id={id} key={id} like={like} />
				))}
			</div>
		</div>
	);
};

export default MyPost;
