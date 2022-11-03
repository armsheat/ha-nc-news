import { useEffect, useState } from "react"
import ArticleGrid from './ArticleGrid'
import TopicSideBar from "./TopicSideBar";


function SearchManager(props) {

  const { URLQuery, setURL } = props
    
    const [newArticles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(()  => {
        setIsLoading(true)
        fetch(URLQuery)
        .then((res) => res.json())
        .then(({articles}) => {
     
          setArticles(articles);
          setIsLoading(false)
        });
    }, [URLQuery]);


    if (isLoading) return <p>Loading...</p>

    return (<div>
          <TopicSideBar setURL={setURL}/>
        <div className='container'>
          <ArticleGrid newArticles={newArticles}/>
        </div>
        </div>
    )
}

export default SearchManager