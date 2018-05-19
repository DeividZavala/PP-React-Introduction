import React from 'react';

export const Champion = ({id, years,name,img,bestPlayers}) =>{
    return(
            <div className="photo">
                <h3>{years}</h3>
                <img height="200px" src={img} alt=""/>
                <p>{name}</p>
                <h5>Best Players</h5>
                <ul>
                    <li>{bestPlayers[0]}</li>
                    <li>{bestPlayers[1]}</li>
                    <li>{bestPlayers[2]}</li>
                    <li>{bestPlayers[3]}</li>
                    <li>{bestPlayers[4]}</li>
                </ul>
            </div>
    )
}