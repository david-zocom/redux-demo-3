const CHANGE_TAB = 'CHANGE_TAB';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

/*const Action = {
	actionChangeTab
}*/

export { CHANGE_TAB, actionChangeTab };