import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import TopicSideBar from './TopicSideBar';

function ArticlePage() {
    const { articleID } = useParams()
    console.log(articleID)
    const [isLoading, setIsLoading] = useState(true);
    const [newArticle, setArticle] = useState({})

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://heathers-news.herokuapp.com/api/articles/${articleID}`)
        .then((res) => res.json())
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    const { title, topic, created_at, author, body, number_of_comments, votes } = newArticle

    return (
        <div className='articlePage'>
        <TopicSideBar/>
        <div className='articleMain'>
            <h2 id='articleTitle'>{title}</h2>
            <h4 className="topicAndDate">
                {topic} | {created_at.substring(0,10)} </h4>
                <h4 id='writtenBy'>Written by: {author}</h4>
            <p id='articleBody'>{body}</p>
            <div>
                <p className='topicAndDate'>votes: {votes}</p>
            </div>
        </div>
        </div>
    )
}

export default ArticlePage