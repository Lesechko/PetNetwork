import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderEnrieTree = function(state, onAddPost, apdatePost) {
	ReactDOM.render(
		<App
			dialogs={state.dialogsPage.dialogs}
			messages={state.dialogsPage.messages}
			posts={state.profilePages.posts}
			friends={state.navbarPages.friends}
			inputValue={state.profilePages.cashPost}
			AddPost={onAddPost}
			apdatePost={apdatePost}
		/>,
		document.getElementById('root')
	);
};
