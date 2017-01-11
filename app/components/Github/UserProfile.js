import React from 'react';

export default class UserProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = { username: props.username, bio: props.bio};
	}

	render () {
		return (
			<div className="container">
				<p>Username: {this.state.username}</p>
				<p>Bio: {this.state.bio}</p>
			</div>
		);
	}
}
