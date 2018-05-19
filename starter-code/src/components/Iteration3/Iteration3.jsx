import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Champion} from './Champion'
import {Teams} from './teams'


class Iteration3 extends Component{
    state={
        teams: Teams
    }

    render(){
        return(
            <div>
            <h1>NBA Champions</h1>
                <div className="iteration1-album">
                    {this.state.teams.map(team=>{
                        return(
                            <Champion key={team.id} team={team} {...team}/>
                        );
                    })}
                </div>
                <Link to='/'>
                <h3>Back to home</h3>
                </Link>
            </div>
        )
    }
}

export default Iteration3;