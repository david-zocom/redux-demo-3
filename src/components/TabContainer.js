import React, {Component} from 'react';
import ListView from './ListView';
import Picture from './Picture';
import History from './History';
import {actionChangeTab, actionAddNumber, actionHistory} from '../actions/actions.js';
import {connect} from 'react-redux';

class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickWeather = this.handleClickWeather.bind(this);
		this.handleClickNumbers = this.handleClickNumbers.bind(this);
		this.handleClickPicture = this.handleClickPicture.bind(this);
		this.handleClickAddNumber = this.handleClickAddNumber.bind(this)
		this.handleClickHistory = this.handleClickHistory.bind(this)
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
			view = <ListView items={['regn', 'sol', 'hagel', 'dimma']} />;
		} else if( this.props.tab === 2 ) {
			view = <ListView items={this.props.numbers} />;
		} else if( this.props.tab === 3 ) {
			view = <Picture image={this.props.imageUrl} />;
		} else {
			view = <History history={this.props.history} />;
		}
		return (
			<div className="App">
			<div className="tabheader">
				<button onClick={this.handleClickWeather}>väder</button>
				<button onClick={this.handleClickNumbers}>tal</button>
				<button onClick={this.handleClickPicture}>bild</button>
				<button onClick={this.handleClickHistory}>historik</button>
				
			</div>
			<div className="tabbody">
				{view}
			</div>
			<div>
				<button onClick={this.handleClickAddNumber}>Lägg till tal</button>
			</div>
		  </div>
		);
	}
	handleClickAddNumber(e) {
		let action = actionAddNumber(42);
		this.props.dispatch( action );
		this.props.dispatch( actionHistory(action) );
	}
	handleClickWeather(e) {
		this.changeTab(1);
	}
	handleClickNumbers(e) {
		this.changeTab(2);
	}
	handleClickPicture(e) {
		this.changeTab(3);
	}
	handleClickHistory(e) {
		this.changeTab(4);
	}
	changeTab(tab) {
		let action = actionChangeTab(tab);
		this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}
}

function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
		imageUrl: state.imageUrl,
		numbers: state.numbers,
		history: state.history
	}
}

export default connect(mapStateToProps)(TabComponent);


