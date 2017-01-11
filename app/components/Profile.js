import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes';

export default class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			notes: [1,2,3,4],
			bio: {
				name:'Andrés Villanueva'
			},
			repos: ['A','B','C','D']
		};
	}

	render() {

		return (
			<div className="row">
				<div className="col-md-4">
					<h3>User Profile Component</h3>
					<UserProfile username={this.props.params.username} bio={this.state.bio.name}/>
				</div>
				<div className="col-md-4">
					<h3>Repos Component</h3>
					<Repos repos={this.state.repos}/>
				</div>
				<div className="col-md-4">
					<h3>Notes Component</h3>
					<Notes notes={this.state.notes}/>
				</div>
			</div>
		);
	}
}
