import React from 'react';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom';
import Dialogs from './components/Profile/Dialogs/Dialogs';

function App(props) {
	debugger;
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<div className={classes.content_wrapper}>
					<Header />
					<Navbar friends={props.friends} />
					<div className={classes.main_wrapper}>
						<Route
							path="/profile"
							render={() => (
								<Profile
									posts={props.posts}
									AddPost={props.AddPost}
									apdatePost={props.apdatePost}
									inputValue={props.inputValue}
								/>
							)}
						/>
						<Route
							path="/dialogs"
							render={() => (
								<Dialogs messages={props.messages} dialogs={props.dialogs} />
							)}
						/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
