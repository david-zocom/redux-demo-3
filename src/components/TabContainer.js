import React, {Component} from 'react';
import ListView from './ListView';

class TabComponent extends Component {
	render() {
		return (
			<div className="App">
			<div className="tabheader">
				<button>väder</button>
				<button>tal</button>
			</div>
			<div className="tabbody">tabs
				<ListView items={['regn', 'sol', 'hagel', 'dimma']} />
				<ListView items={[2, 4, 8, 16, 32, 64]} />
			</div>
		  </div>
		);
	}
}

export default TabComponent;