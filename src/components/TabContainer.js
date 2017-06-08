import React, {Component} from 'react';
import ListView from './ListView';
import {actionChangeTab} from '../actions/actions.js';
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickWeather = this.handleClickWeather.bind(this);
		this.handleClickNumbers = this.handleClickNumbers.bind(this);
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
			view = <ListView items={['regn', 'sol', 'hagel', 'dimma']} />;
		} else {
			view = <ListView items={[2, 4, 8, 16, 32, 64]} />;
		}
		return (
			<div className="App">
			<div className="tabheader">
				<button onClick={this.handleClickWeather}>väder</button>
				<button onClick={this.handleClickNumbers}>tal</button>
				
			</div>
			<div className="tabbody">
				{view}
			</div>
		  </div>
		);
	}
	handleClickWeather(e) {
		let action = actionChangeTab(1);
		this.props.dispatch(action);
	}
	handleClickNumbers(e) {
		let action = actionChangeTab(2);
		this.props.dispatch(action);
	}
}

function mapStateToProps(state) {
	return {
		tab: state.tab
	}
}

export default connect(mapStateToProps)(TabComponent);


