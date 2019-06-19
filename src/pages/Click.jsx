import React from 'react';
import '../App.css';

const Click = () => {
		return (
			<div className="container">
				<div className="vertical-center horizontal-center flex-1 column">
					<h3>Count:</h3>
					<div>
						<button className="primary-bg">Add</button>
						<button className="secondary-bg">Reset</button>
						<button className="danger-bg">Subtract</button>
					</div>
				</div>
			</div>
	);
};

export default Click;
