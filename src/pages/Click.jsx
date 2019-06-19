import React from 'react';
import '../App.css';

class Click extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	};

	handleCount = (value) => {
		if (value === 'reset') {
			this.setState({ count: 0 });
		} else {
			this.setState({ count: value });
		}
		document.title = value;
	};

	render() {
		return (
			<div className="container">
				<div className="vertical-center horizontal-center flex-1 column">
					<h3>Count: {this.state.count}</h3>
					<div>
						<button className="primary-bg" onClick={() => this.handleCount(this.state.count + 1)}>Add</button>
						<button className="secondary-bg" onClick={() => this.handleCount('reset')}>Reset</button>
						<button className="danger-bg" onClick={() => this.handleCount(this.state.count - 1)}>Subtract</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Click;
