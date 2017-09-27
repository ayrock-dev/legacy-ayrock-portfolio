import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App';
import registerServiceWorker from './components/registerServiceWorker/registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

registerServiceWorker();
