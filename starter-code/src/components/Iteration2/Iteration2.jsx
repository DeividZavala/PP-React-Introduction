import React, {Component} from 'react';
import Comments from './Comments'
import {Link} from 'react-router-dom';

class Iteration2 extends Component{
    render(){
        return(
            <div className="iteration1">
                <h1>Isle of Dogs</h1>
                <img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/03/isle_of_dogs.jpg?itok=s6ysZuHt" alt=""/>
                <p>When, by executive decree, all the canine pets of Megasaki City are exiled to a vast garbage-dump called Trash Island, 12-year-old Atari sets off alone in a miniature Junior-Turbo Prop and flies across the river in search of his bodyguard-dog, Spots. There, with the assistance of a pack of newly-found mongrel friends, he begins an epic journey that will decide the fate and future of the entire Prefecture.</p>
                <Comments/>
                <Link to='/'>
                <h3>Back to home</h3>
                </Link>
            </div>
        )
    }
}

export default Iteration2;