class App extends React.Component{
    
  state = {
    title: this.props.title ? this.props.title: 'Aquí va tu titulo',
    img: this.props.img ? this.props.img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEX09PRNTU34+Pjr6+tUVFQ7Ozu4uLhHR0ezs7NKSkqNjY3o6Ojk5OT7+/vx8fFCQkKFhYVZWVnLy8vb29utra2fn5/ExMR4eHhtbW1lZWWlpaWRkZHT09PKysqXl5dgYGDWMLmdAAACtElEQVR4nO3aW3OiMACGYRJACGAIBwER9P//yw1uDyqw3XacOhPe56LTcXKRfCYxJ88DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw5LJXV+s3ySZe0mwphL0RwZww+1dX7BftTSTmIjIgg21kIKVO3+h2MYP2o0Dq5I+E9Jv6nLw5XdRCBupyei+Q9LvMvRBGc4k+LUVgQ/gskAdto19d5+fSu0Itt3uNUkHz6lo/layC7yVwTaGoXBoO+pR/OwIh8t6l0eD/oBvYjnD0X13xJ/LD9YauzI/XjrCFDOz035kuyJdWC1bofgZRlJRZlmZZmUSLKTifgVKmej9H8Cqz9NPpegaqqLW0GXh6+iN1XcxDcD0DEU8JVGPcx2M1pRBvrh/kZ7tySnddPul2qV0NnWdrCLczUIEvZXoWf6fCSJztRnG+iHA7g/yw93Qv3huthF0S7g+PHcHxDOz3Xt5soNWltP1iUxlErZb67mvPD/aTx5MVtzM4aZm1t8NftZnUpy1lkNu1QXW8y+BY2TXCw2BwOoPI9vyqu8ugsxkcttQPosSOhbuz5cjYsZBsKQN18aXu7+bEXkv/8aTV6QxEOEg53AwG1U0fzEo5ncH1OiX+WBiqIF66eHE7A5EPdsdYF9dDJBXZPaQnh43tF2znz2wIoynCPCzMaCPIutnm2fEMhEpsCDIbxnIcrv+ZDZ4fqHa4eYEytPMS7mdgJ8Lz1MbpHsU/Lx6+u5+BnRiVqZuqqU2+fAWzhQymw/U8zNeO1h3LYKWRX3DqjkUvvjv5ilt3bV7zkzvXMH51tZ8q/UFHiFq3nqLIqv3X5eqcioRx6vmBJbO+PS68y1xzNLXvWAQ2hH1W7v5f6Tv5Tm/lnTbPtwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6/4AXfAjx4BgEisAAAAASUVORK5CYII=',
    desc: this.props.desc ? this.props.desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore magnam quo quas neque error illo unde fuga esse omnis? Saepe aut aperiam dolorum nemo tenetur cupiditate asperiores quas molestiae!'
  };

  render(){
    const {title, img, desc} = this.state;
    return (
      <div className="container">
        <Post {...this.state}/>
        <Comments />
      </div>
    );
  };
};

const Post = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.img}/>
      <p>{props.desc}</p>
    </div>
  );
};

const Comments = () => {
  return (
  <div>
    <h1>Comments</h1>
    <div>
      <h4>Fer</h4>
      <p>kdsa,jbdvhjaskdnbas</p>
    </div>
    <div>
      <h4>BlisS</h4>
      <p>kaskjdhaspehamsk</p>
    </div>
    <form>
      <h1>Add your comment</h1>
      <p>Name:</p>
      <input type="text" placeholder="Name"/>
      <p>Description:</p>
      <textarea></textarea><br/>
      <input type="submit"/>
    </form>
  </div>
  );
};

ReactDOM.render(<App/>, output);