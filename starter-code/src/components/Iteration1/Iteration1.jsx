import React, {Component} from 'react';
import Photo from './Photo'

class Iteration1 extends Component{
    render(){
        return(
            <div className="iteration1">
                <h1>Photo Album</h1>
                <div className="iteration1-album">
                    <Photo title="Madrid" img="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Madrid/madrid-overview-sunsetovermadrid-xlarge.jpg"/>
                    <Photo title="Barcelona" img="https://images.lucasfox.com/location/4x3_960w/836D68DCBD.jpg"/>
                    <Photo title="Paris" img="http://www.samatahome.com/wp-content/uploads/2017/11/DG2015-paris.jpg"/>
                </div>
            </div>
        )
    }
}

export default Iteration1;