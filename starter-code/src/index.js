import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';
// import InjectTapEventPlugin from 'react-tap-event-plugin';

const WithRouter =()=>{
    return(
        <BrowserRouter><App/></BrowserRouter>
    )
    
}

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
// InjectTapEventPlugin();

