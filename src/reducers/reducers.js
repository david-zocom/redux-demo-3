import { CHANGE_TAB } from '../actions/actions.js';

let initialState = {
	tab: 1
}

function rootReducer(state = initialState, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return {
				tab: action.tab
			};
		default:
			return state;
	}
}

export default rootReducer;