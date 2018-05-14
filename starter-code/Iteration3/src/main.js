class Card extends React.Component{
    state = {
        date:this.props.date,
        champ :this.props.champ,
        img: this.props.img,
        players: this.props.players

    }
    render(){
        const {date,champ,img,players} = this.state;
        return(
            <div>
                <h2>{date}</h2> 
                <h2>{champ}</h2> 
                <img src={img} alt=""/>
                <h3>Best players</h3>
                <ul>
                    {players.map(p=><li>{p}</li>)}
                </ul>
            </div>
        )
    }
}


const App = () => {
    return(
    <div className = "container">
      <Card date="2015-2016" champ="Cleveland Cavaliers" img="http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/cle.png" players={["LeBron James","James Berger","Kevin Spacey"]}/>
      <Card date="2014-2015" champ="Golden State Warriors" img="http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png" players={["Stephen Curry","Klay Thompson","Andrew Bogut"]}/>
      <Card date="2013-2014" champ="San Antonio Spurs" img="http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png" players={["Tim Duncan","Tony Parker","Manu Ginobili"]}/>    
      
      
    </div>
    )
}



ReactDOM.render(<App/>, output);

