import {Link } from "react-router-dom";

function ArticleCard({ article }) {
    const { title, topic, created_at, author, article_id } = article

    return (
        <div className='article-card' >
            <Link to={`/articles/${article_id}`}><li >
                <h3 id='articleTitle'>{title}</h3>       
                <h4 className="topicAndDate">
                {topic} | {created_at.substring(0,10)} </h4>
                <h4 id='writtenBy'>Written by: {author}</h4>
            </li></Link>
        </div>
    )
}

export default ArticleCard