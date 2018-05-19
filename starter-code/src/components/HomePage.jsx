import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div>
            <h1>PP - React Introduction</h1>
            <Link to='/iteration1'>
                <h3>Iteration 1</h3>
            </Link>
            <Link to='/iteration2'>
                <h3>Iteration 2</h3>
            </Link>
            <Link to='/iteration3'>
                <h3>Iteration 3</h3>
            </Link>
        </div>
        )
    }
}

export default HomePage;