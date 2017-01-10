import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
	<Router>
		<Route path="/react-github-search/public/index.html" component={Main}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
);

export default routes;
