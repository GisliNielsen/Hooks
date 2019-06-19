import React from 'react';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleSubmit(event) {
		event.preventDefault();
		alert(`${this.state.name} ${this.state.email} ${this.state.password}`);
	};

	handleInput = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div className="container">
				<div className="flex-1 column horizontal-center vertical-center">
					<h3>Form</h3>
					<form onSubmit={this.handleSubmit}>
						<label>
							<p>Name</p>
							<input name="name" value={this.state.name} onChange={this.handleInput} />
						</label>
						<label>
							<p>Email</p>
							<input name="email" value={this.state.email} onChange={this.handleInput} />
						</label>
						<label>
							<p>Password</p>
							<input name="password" value={this.state.password} onChange={this.handleInput} />
						</label>
						<div className="horizontal-center vertical-center margin-bottom-100">
							<button className="primary-bg margin-10" type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	};
};

export default Form;