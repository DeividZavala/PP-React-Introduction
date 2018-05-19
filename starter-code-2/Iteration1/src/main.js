class App extends React.Component{
  
  state = {
    title:"React Introduction"
  };

  render(){
    const {title} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>hola</p>
      </div>
    )
  }
};

ReactDOM.render(<App/>, root);