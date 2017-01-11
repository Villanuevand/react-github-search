import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

const routes = (
	<Route>
		<Route path="/public/" component={Main}>
			<Route path='/public/:username' component={Profile}/>
			<IndexRoute component={Home} />
		</Route>
	</Route>
);

export default routes;
