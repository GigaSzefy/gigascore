import React, { useEffect, useState } from 'react'
import './news.css';
import { Article } from '../../types/news';
import { apiNews } from '../../services/api/api-news';


const NewsComponent: React.FC = () => {

    const [news, setNews] = useState<Article[]>([]);

    useEffect(() => {
        (async () => {
            const newsData = await apiNews.getNews()
            setNews(newsData)
        })()
      }, []);
    
  return (
      
      <div className='articles'>
          {news.map(article => (
            <div key={article.title} className='article'>
              <a className='news=link' href={article.url} target='_blank'>
                <img src={article.urlToImage} alt={article.title} className='art-img' />
                <div className='art-text'>
                  <h2>{article.title}</h2>
                  <div className='br'></div>
                  <p>{article.description}</p>
                </div>
              </a>
            </div>
          ))}
      </div>
  )
}

export default NewsComponent