import React, { Component } from 'react';
import Axios from 'axios';

class List extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	};

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		Axios.get('https://randomuser.me/api/?results=50')
			.then((res) => {
				console.log(res.data.results);
				this.setState({ users: res.data.results });
			})
			.catch((err) => {
				console.log(err);
				alert('Noe gikk galt');
			});
	}
	
	render() {
		return (
			<div className="container">
				<div className="flex-1 column vertical-center horizontal-center">
					<h3>User list</h3>
					<div className="width-100vw scroll-y column flex-1">
						<RenderList users={this.state.users} />
					</div>
				</div>
			</div>
		);
	}
};

class RenderList extends Component {
	render() {
		return this.props.users.map((user) => {
			return (
				<p className="text-center" key={`RenderList-${user.cell}`}>{user.name.first} {user.name.last}</p>
			);
		});
	};
}

export default List;
