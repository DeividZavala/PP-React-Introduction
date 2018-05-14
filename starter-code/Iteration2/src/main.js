const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();

class App extends React.Component{
  
  MainComponnent = {
    title: 'Learn how to code with Ironhack',
    img: 'https://mobile-cdn.123rf.com/300wm/kakigori/kakigori1505/kakigori150500050/40702151-ilustraci%C3%B3n-de-lindo-feliz-familia-de-cuatro-personas-que-se-sientan-en-el-sof%C3%A1.jpg?ver=6',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur optio quidem voluptate corporis facere doloremque quod maiores quam atque suscipit asperiores, repudiandae perferendis, nostrum voluptatum magnam illo non officia?'
  };
  CommentsComponnent = {
    username:'Juanito Robles',
    date: '12/11/12',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur optio quidem voluptate corporis facere doloremque quod maiores quam atque suscipit asperiores, repudiandae perferendis, nostrum voluptatum magnam illo non officia?'
  }
  show = () => {
    this.setState({showing:!this.state.showing})
  }
  render(){
    const {title,img,desc} = this.MainComponnent;
    const {username,date,comment} = this.CommentsComponnent;
    return (
      <div >
        
        <Main title={this.MainComponnent.title} img={this.MainComponnent.img} desc={this.MainComponnent.desc} />
      </div>
    )
  }
};

const Main = ({title,img,desc}) => {
  return(
   <div >
    <h2>{title}</h2>
    <br/>
    <img src={img}/>
    <br/>
    <p>{desc}</p>
   </div>
  )
}



ReactDOM.render(<App/>, output);