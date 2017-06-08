import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; 
import rootReducer from './reducers/reducers.js';


let initialState = {
	tab: 1  // 1=väder, 2=tal
}

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
