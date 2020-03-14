import React from 'react';
// import classes from './Profile.module.scss';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	return (
		<React.Fragment>
			<ProfileInfo />
			<MyPost
				posts={props.posts}
				AddPost={props.AddPost}
				apdatePost={props.apdatePost}
				value={props.inputValue}
			/>
		</React.Fragment>
	);
};
export default Profile;
