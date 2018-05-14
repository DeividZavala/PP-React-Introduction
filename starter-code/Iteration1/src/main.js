const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();

class App extends React.Component{
    state={
        img1:'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg',
        img2:'https://media.diariolasamericas.com/adjuntos/216/imagenes/000/105/0000105028.jpg',
        img3:'https://i.ytimg.com/vi/nXpibZYEdcE/maxresdefault.jpg'
    };


    render(){
        const {img1, img2, img3} = this.state;
        return(
        <div className="fotos">
        <figure>
          <img src={img1}/>
          <figcaption> Descripcion imagen 1</figcaption>
        </figure>
        <figure>
          <img src={img2}/>
          <figcaption> Descripcion imagen 2</figcaption>
        </figure>
        <figure>
          <img src={img3}/>
          <figcaption> Descripcion imagen 3</figcaption>
        </figure>
          
        </div>
        )
      }
}

// const App = () => {
//   return(
//     <div>
//       <p>images</p>

//     </div>    
//   )
// }

ReactDOM.render(<App/>,output);