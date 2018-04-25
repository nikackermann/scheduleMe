import React from 'react';
import ReactDOM from 'react-dom';

// CSS dependencies
import './css/main.css';
import 'bulma/css/bulma.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
