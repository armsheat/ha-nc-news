import { useParams } from 'react-router-dom'
import SearchManager from "./SearchManager";

function TopicPage(props) {
    const { slug } = useParams()
    const {URLQuery, setURL} = props

     setURL(`https://heathers-news.herokuapp.com/api/articles?topic=${slug}`)

    return (
    <>
        <h2 className='topicTitle'>{slug}</h2>
        <SearchManager setURL={setURL} URLQuery={URLQuery}/>
    </>
    )
    
}

export default TopicPage