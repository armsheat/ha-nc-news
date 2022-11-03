import ArticleCard from './ArticleCard'

function ArticleGrid({ newArticles }) {
    return (
      <ul className='article-grid' >
        {newArticles.map((article) => {
          return <ArticleCard article={article} key={article.article_id}/>;        
        })}
      </ul>
    );
  }
  
  export default ArticleGrid;