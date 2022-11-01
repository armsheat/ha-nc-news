//import { moment } from "moment"

function ArticleCard({ article }) {
    const { title, topic, created_at, body, id} = article

    return (
        <div className='article-card' key={id}>
            <li>
                <h3 id='articleTitle'>{title}</h3>       
                <h4 className="topicAndDate">
                {topic} | {created_at.substring(0,10)} </h4>
            </li>
        </div>
    )
}

export default ArticleCard