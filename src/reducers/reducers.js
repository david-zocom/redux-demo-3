import { CHANGE_TAB, ADD_NUMBER } from '../actions/actions.js';

let initialState = {
	tab: 1
}

/*function rootReducer(state = initialState, action) {
	console.log('rootReducer state:', state, action)
	switch( action.type ) {
		case CHANGE_TAB:
			return {
				...state,
				tab: action.tab
			};
		case ADD_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.number]
			};
		default:
			return state;
	}
}*/

function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function numbersReducer(state = [], action) {
	switch( action.type ) {
		case ADD_NUMBER:
			return [...state, action.number];
		default:
			return state;
	}
}
function pictureReducer(state = '', action) {
	return state;
}

export {tabReducer, numbersReducer, pictureReducer};



