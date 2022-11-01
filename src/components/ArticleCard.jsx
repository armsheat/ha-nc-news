//import { moment } from "moment"

function ArticleCard({ article }) {
    const { title, topic, created_at, body} = article

    return (
        <div className='article-card'>
            <li id='articleTitle'>{title}</li>
            <li>{body.substring(0,200)}...</li>
            <div className="topicAndDate">
            <li>{topic} | {created_at.substring(0,10)}</li>
            <li></li>
            </div>
        </div>
    )
}

export default ArticleCard