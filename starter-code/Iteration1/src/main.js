class App extends React.Component{
  
  state = {
    title:"React Introduction"
  };

  render(){
    const {title} = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
};

ReactDOM.render(<App/>, root);