const CHANGE_TAB = 'CHANGE_TAB';
const ADD_NUMBER = 'ADD_NUMBER';
const HISTORY = 'HISTORY';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}

export { CHANGE_TAB, actionChangeTab, ADD_NUMBER, actionAddNumber, HISTORY, actionHistory };