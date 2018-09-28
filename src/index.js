import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.scss';
import App from './js/containers/App.js';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
