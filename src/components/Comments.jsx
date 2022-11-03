import { useEffect, useState } from "react"

function Comments({articleID}) {
    
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://heathers-news.herokuapp.com/api/articles/${articleID}/comments`)
        .then((res) => res.json())
        .then(({comments}) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <ul className="allComments">
            {comments.map(({votes, author, body, created_at, comment_id}) => {
                return <li key={comment_id} className='individualComment'>
                    <h3>{body}</h3>
                    <h4>written by {author}</h4>
                    <h4>{created_at.substring(0,10)}</h4>
                    <h4>Votes: {votes}</h4>
                </li>
            })}
        </ul>
    )

}

export default Comments