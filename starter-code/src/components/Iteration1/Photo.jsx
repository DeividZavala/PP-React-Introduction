import React from 'react';

const Photo = (props) =>{
    return(
        <div className="photo">
            <img width="300px"src={props.img}/>
            <p>{props.title}</p>
        </div>
    )
}

export default Photo;