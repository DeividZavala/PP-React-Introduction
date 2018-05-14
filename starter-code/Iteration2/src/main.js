class MainComponent extends React.Component{
    state = {
        title:"Bali, indonesia",
        img :"http://prismasa.com.mx/wp-content/uploads/2017/04/bali_640x480.jpg",
        desc: "Lorem ipsum Bali"

    }
    render(){
        const {title,img,desc} = this.state;
        return(
            <div>
                <h3>{title}</h3>  
                <img src={img} alt=""/>
                <p>{desc}</p>
            </div>
        )
    }
}
class CommentsComponent extends React.Component{
    state = {
        author:this.props.author,
        body:this.props.body
    }
    render(){
        const {author,body} = this.state;
        return(
        <div>
            <h5>{author}</h5>
            <p>{body}</p>
        </div>   
        ) 
    }
}

const CommentSection = () => {
    return(
        <div>
        <div>
            <CommentsComponent author="Autor1" body="Lorem ipsum"/>
            <CommentsComponent author="Autor2" body="Lorem ipsum"/>
            <CommentsComponent author="Autor3" body="Lorem ipsum"/>
        </div>
        <div>
            <h4>Add your comment</h4>
            <input type="text" placeholder="Name"/>
        </div>
        </div>
    )
}


const App = () => {
    return(
    <div className = "container">
      <MainComponent/>  
      <CommentSection/>
    </div>
    )
}



ReactDOM.render(<App/>, output);

