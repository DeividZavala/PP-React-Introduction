const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();

class App extends React.Component{
  
  state = {
    img: 'https://mobile-cdn.123rf.com/300wm/kakigori/kakigori1505/kakigori150500050/40702151-ilustraci%C3%B3n-de-lindo-feliz-familia-de-cuatro-personas-que-se-sientan-en-el-sof%C3%A1.jpg?ver=6',
    desc: 'Ironhack Madrid',
    img2: 'https://i0.wp.com/clinicasamgar.com/wp-content/uploads/2017/11/Familia-feliz-300x300-1.jpg?fit=300%2C300',
    desc2: 'Ironhack Barcelona',
    img3: 'https://fotozambrano.com.co/wp-content/uploads/2016/03/FAMILIA-300x300.jpg',
    desc3: 'Ironhack Miami'
  };
  show = () => {
    this.setState({showing:!this.state.showing})
  }
  render(){
    const {img,desc,img2,desc2,img3,desc3} = this.state;
    return (
      <div >
        
        <Album img={this.state.img} desc={this.state.desc} img2={this.state.img2} desc2={this.state.desc2} img3={this.state.img3} desc3={this.state.desc3}/>
      </div>
    )
  }
};

const Album = ({img,desc,img2,desc2,img3,desc3}) => {
  return(
   <div >
    <div className="centrar">
    <img src={img}/>
    <img src={img2}/>
    <img src={img3}/>
    </div>
    <div className="centrar">
    <span>{desc}</span>
    <span>{desc2}</span>
    <span>{desc3}</span>
    </div>
   </div>
  )
}



ReactDOM.render(<App/>, output);