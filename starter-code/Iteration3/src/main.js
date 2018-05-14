class NBA extends React.Component{

  state =  {
    year: this.props.year ? this.props.year: 2000,
    champion: this.props.champion ? this.props.champion: 'Lakers',
    championURL: this.props.championURL ? this.props.championURL: 'data:image/jpeg;base64,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',
    players: this.props.players ? this.props.players: ['hola', 'como', 'estas']
  };

  render(){
    const {year, champion, championURL, players} = this.state;
    return (
      <div className="container">
        <h1>{year}</h1>
        <h2>{champion}</h2>
        <img src={championURL}/>
        <h3>{players}</h3>
        <ul>
          {players.map(p => <li>{p}</li>)}
        </ul>
      </div>
    );
  };
};

const App = () => {
  return(
    <div>
      <NBA year = '2015-16' champion = 'Cleveland Cavaliers' championURL = 'data:image/png;base64,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' />
      <NBA />
      <NBA />
    </div>
  );
};

ReactDOM.render(<App/>, output)