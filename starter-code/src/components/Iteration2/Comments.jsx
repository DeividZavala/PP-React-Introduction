import React from 'react';

const Comments = (props) =>{
    const style={
        backgroundColor: '#eee',
        width: '300px',
        textAlign: 'center'
    }

    return(
        <div>
            <h1>Comments</h1>
            <div>
                <span>Alinatrix  </span>
                <span>19/05/207 10:20</span>
                <p>Está bien chida</p>
            </div>
            <div>
                <span>Ral  </span>
                <span>19/05/207 12:20</span>
                <p>Está buena</p>
            </div>
            <form style={style}>
                <h2>Add your comment</h2>
                <label>Name:</label><br/>
                <input type="text" name="" id=""/><br/>
                <label>Description:</label><br/>
                <textarea></textarea> <br/><br/>
                <button>Comment</button>
            </form>
        </div>
    )
}



export default Comments;