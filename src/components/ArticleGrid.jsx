import ArticleCard from './ArticleCard'

function ArticleGrid({ newArticles }) {
    return (
      <ul className='article-grid'>
        {newArticles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </ul>
    );
  }
  
  export default ArticleGrid;