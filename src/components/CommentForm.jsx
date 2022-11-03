import { useEffect, useState } from "react";

function CommentForm({comments, setComments, articleID}) {

    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setComment('')
        addComment()
    }

    const addComment = () => {
        useEffect(() => {

        })
    }


    return (
        <form onSubmit={handleSubmit}>
        <div className="formHolder">
            <label htmlFor="username">Your username</label>
            <input type="text" name="username" id="task" onChange={(event) => setUser(event.target.value)} value={user} className={newTask.length > 0 ? "valid" : ""}></input>
        </div>
        <div className="formHolder">
            <label htmlFor="newComment">Your comment</label>
            <input type="text" name="newComment" id="newComment" onChange={(event) => setComment(event.target.value)} value={comment}></input>
        </div>
        <button type="submit" className = "addCommentButton" >Add Comment</button>
    </form>
    )
}

export default CommentForm