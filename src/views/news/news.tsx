import React, { useEffect, useState } from 'react'
import './news.css';

const NewsView: React.FC = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {

        const apiURL = `https://newsapi.org/v2/everything?q=football&from=2023-04-01&sortBy=popularity&apiKey=ee1e6126ee11484fb715297f8fd1d85a`
    
        fetch(apiURL) 
          .then(response => response.json())
          .then(data => setNews(data.articles))
          .catch(err => console.error(err));
    
      }, []);
    
    

  return (
      <div className='articles'>
          {news.map(article => (
            <div key={article.title} className='article'>
              <img src={article.urlToImage} alt={article.title} className='art-img' />
              <div className='art-text'>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
      </div>
  )
}

export default NewsView