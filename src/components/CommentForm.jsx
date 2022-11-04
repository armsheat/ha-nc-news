import { useEffect, useState } from "react";

function CommentForm({ setComments, articleID}) {

    const [user, setUser] = useState('')
    const [validUsers, setValidUsers] = useState([])
    const [message, setMessage] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
    fetch(`https://heathers-news.herokuapp.com/api/users`)
        .then((res) => res.json())
        .then(({users}) => {
           let newUsers = users.map((account) => {
            return account.username
           })
           setValidUsers(newUsers)
        })
    }, [])

    const handleSubmit = (event) => {
        if(!validUsers.includes(user)) {
            event.preventDefault()
            setMessage('Please input a valid username')    
        }       
        if (comment.length > 0 && validUsers.includes(user)) {
            event.preventDefault()
            setComment('')
            addComment()
        } else {
            event.preventDefault()
        }
    }

    const addComment = () => {
        console.log(user, comment)
            fetch(`https://heathers-news.herokuapp.com/api/articles/${articleID}/comments`, {
                method: "POST",
                headers: {"Content-type": "application/json"},  
                body: JSON.stringify({'user':user,
                                    'body':comment })
            }) .then((res) => res.json())
            .then(({comment}) => {
                
                setComment(comment)
                setComments((currentComments) => {
                    let newComments = [...currentComments]
                    newComments.push(comment)
                    setComment('')
                    return newComments;
                })
            }).catch((err) => {
                console.log(err)
            })    
    }


    return (
        <form onSubmit={handleSubmit}>
        <div className="formHolder">
            <label htmlFor="username">Your username </label>
            <input type="text" name="username" id="username" onChange={(event) => setUser(event.target.value)} value={user} className={user.length > 0 ? "valid" : ""}></input>
            <p>{message}</p>
        </div>
        <div className="formHolder">
            <label htmlFor="newComment">Your comment </label>
            <input type="text" name="newComment" id="newComment" onChange={(event) => setComment(event.target.value)} value={comment} className={comment.length > 0 ? "valid" : ""} ></input>
        </div>
        <button type="submit" className = "addCommentButton" >Add Comment</button>
       
    </form>
    )
}

export default CommentForm