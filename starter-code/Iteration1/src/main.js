class Photo1 extends React.Component{
    state = {
        img : "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/collection-hand-painted-bootleg-movie-posters-from-africa-95-5ad856c6df834__700.jpg",
        desc :"Alien vs predator"
    }
    render(){
        const {img,desc} = this.state;
        return(
            <div>
                <img src={img} alt=""/>
                <p>{desc}</p>
            </div>
        )
    }
}
class Photo2 extends React.Component{
    state = {
        img : "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/collection-hand-painted-bootleg-movie-posters-from-africa-81-5ad856aab3a65__700.jpg",
        desc : "Terminator I"
    }
    render(){
        const {img,desc} = this.state;
        return(
            <div>
                <img src={img} alt=""/>
                <p>{desc}</p>
            </div>
        )
    }
}
class Photo3 extends React.Component{
    state = {
        img : "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/collection-hand-painted-bootleg-movie-posters-from-africa-88-5ad856b765beb__700.jpg",
        desc : "The Matrix"
    }
    render(){
        const {img,desc} = this.state;
        return(
            <div>
                <img src={img} alt=""/>
                <p>{desc}</p>
            </div>
        )
    }
}


const App = () => {
    return(
    <div className = "container">
      <Photo1/>  
      <Photo2/>
      <Photo3/>
    </div>
    )
}



ReactDOM.render(<App/>, output);

