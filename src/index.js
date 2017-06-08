import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let state = {
	tab: 1  // 1=väder, 2=tal
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
