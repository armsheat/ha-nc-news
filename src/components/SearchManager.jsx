import { useEffect, useState } from "react"
import ArticleGrid from './ArticleGrid'

function SearchManager() {
    
    const [newArticles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const[URLQuery, setURL] = useState('https://heathers-news.herokuapp.com/api/articles')

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

    return (
        <div className='container'>
          <ArticleGrid newArticles={newArticles}/>
        </div>
    )


}

export default SearchManager