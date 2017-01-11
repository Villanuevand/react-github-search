import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

const routes = (
	<Route path="/" component={Main}>
		<Route path='/profile/:username' component={Profile}/>
		<IndexRoute component={Home} />
	</Route>
);

export default routes;
