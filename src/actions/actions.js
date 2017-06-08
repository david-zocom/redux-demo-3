const CHANGE_TAB = 'CHANGE_TAB';
const ADD_NUMBER = 'ADD_NUMBER';

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

/*const Action = {
	actionChangeTab
}*/

export { CHANGE_TAB, actionChangeTab, ADD_NUMBER, actionAddNumber };