import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/HomePage';
import Iteration1 from './components/Iteration1/Iteration1';
import Iteration2 from './components/Iteration2/Iteration2';
import Iteration3 from './components/Iteration3/Iteration3';

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/iteration1' component={Iteration1}/>
            <Route path='/iteration2' component={Iteration2}/>
            <Route path='/iteration3' component={Iteration3}/>
        </Switch>
    )
};