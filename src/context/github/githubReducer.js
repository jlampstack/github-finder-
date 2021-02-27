import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types.js';

const GithubState = props => {
	// This will basically be our global state for anythign to do with Github
	// We are doing the same type of thing with the sate as we did in App.js
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	// We call an action, it makes a req to Github, we get a res and dispatch a type back to our reducer

	const [state, dispatch] = useReducer(
		GithubReducer,
		initialState,
		initialState,
	);

	// Search Users

	// Get User

	// Get Repos

	// Clear Users

	// Set Loading

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;