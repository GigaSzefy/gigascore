import React, { useEffect, useState } from "react";
import "./news.css";
import { Article } from "../../types/news";

const NewsView: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const apiURL = `https://newsapi.org/v2/everything?q=sport&from=2023-04-01&sortBy=popularity&apiKey=ee1e6126ee11484fb715297f8fd1d85a`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="articles">
      {news.map((article) => (
        <div key={article.title} className="article">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="art-img"
          />
          <div className="art-text">
            <h2>{article.title}</h2>
            <div className="br"></div>
            <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsView;
