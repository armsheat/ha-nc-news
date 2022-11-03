import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import TopicSideBar from './TopicSideBar';
import Comments from './Comments';


function ArticlePage() {
    const { articleID } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [newArticle, setArticle] = useState({})
    const [numOfVotes, setNumOfVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://heathers-news.herokuapp.com/api/articles/${articleID}`)
        .then((res) => res.json())
        .then(({article}) => {
            setArticle(article)
            setNumOfVotes(article.votes)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    
    const handleVoteClick = () => {
        if (hasVoted === false){
            setNumOfVotes((numOfVotes) => numOfVotes + 1);
            setHasVoted(true)
        fetch(`https://heathers-news.herokuapp.com/api/articles/${articleID}`, {  
            method: "PATCH",
            headers: {"Content-type": "application/json"},  
            body: JSON.stringify({'inc_votes' : (votes + 1)})
        }).then((res) => res.json())
        .then(({article}) => {   
          setNumOfVotes(article.votes)
        }).catch(()=> {
            setNumOfVotes((numOfVotes) => numOfVotes - 1)
        })
    }
        }
        

    const { title, topic, created_at, author, body, votes } = newArticle

    return (
        <> 
        <div className='articlePage'>
        <TopicSideBar/>
        <div className='articleMain'>
            <h2 id='articleTitle'>{title}</h2>
            <h4 className="topicAndDate">
                {topic} | {created_at.substring(0,10)} </h4>
                <h4 id='writtenBy'>Written by: {author}</h4>
            <p id='articleBody'>{body}</p>
                <p className='topicAndDate'> <button onClick={ handleVoteClick} disabled={hasVoted? true : false}  >vote</button>   votes: {numOfVotes}</p>
                <Comments articleID={articleID}/>
        </div>
        </div>
      
        </>
    )
}

export default ArticlePage