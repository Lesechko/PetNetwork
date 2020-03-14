import {rerenderEnrieTree} from '../../render';

let postId = 4;

const state = {
	profilePages: {
		posts: [
			{
				message: 'Hello hawe are you?',
				id: 1,
				likes: 3,
			},
			{
				message: 'Hello people',
				id: 2,
				likes: 5,
			},
			{
				message: 'Any body home?',
				id: 3,
				likes: 1,
			},
		],
		cashPost: '',
	},

	dialogsPage: {
		messages: [
			{
				message: 'Hello my baby ',
				id: 1,
			},
			{
				message: 'Hello my friend',
				id: 2,
			},
			{
				message: 'Hello baby shark ',
				id: 3,
			},
			{
				message: 'Hello city ',
				id: 4,
			},
		],
		dialogs: [
			{
				name: 'Alex',
				id: 1,
			},
			{
				name: 'Mihael',
				id: 2,
			},
			{
				name: 'Valeri',
				id: 3,
			},
			{
				name: 'Martin',
				id: 4,
			},
		],
	},

	navbarPages: {
		friends: [
			{
				name: 'Vladilen',
				foto: './img/friend.jpg',
				id: 1,
			},
			{
				name: 'Igor',
				foto: './img/friend.jpg',
				id: 2,
			},
			{
				name: 'Nastya',
				foto: './img/friend.jpg',
				id: 3,
			},
		],
	},
};

export const onAddPost = () => {
	let newPost = {
		message: state.profilePages.cashPost,
		id: postId,
		likes: 0,
	};
	postId++;
	state.profilePages.posts.push(newPost);
	state.profilePages.cashPost = '';
	rerenderEnrieTree(state, onAddPost, apdatePost);
};

export const apdatePost = text => {
	state.profilePages.cashPost = text;
	rerenderEnrieTree(state, onAddPost, apdatePost);
};

export default state;
