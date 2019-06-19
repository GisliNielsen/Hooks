import React from 'react';

class WindowSize extends React.Component {
	state = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	};

	handleResize = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};
	
	render() {
		return (
			<div className="container">
				<div className="flex-1 horizontal-center vertical-center column">
					<h3>Width: {this.state.width}</h3>
					<h3>Height: {this.state.height}</h3>
				</div>
			</div>
		)
	};
};

export default WindowSize;
