const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();

class App extends React.Component{
    state={
        title:"La maravillosa Gran Via",
        img:'https://exp.cdn-hotels.com/hotels/18000000/17710000/17701200/17701133/2d55f9e1_z.jpg',
        description:"lorem Ipsum"
    };


    render(){
        const {title, img, description} = this.state;
        return(
        <div>
        <h1> hola hola </h1>
          
        </div>
        )
      }
}


ReactDOM.render(<App/>,output);