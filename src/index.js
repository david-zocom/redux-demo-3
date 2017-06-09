import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
	numbers: [2, 4, 8, 16, 32, 64],
	history: [{type: 'TEST'}]
}

let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
	history: historyReducer
});
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
