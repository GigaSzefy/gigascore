import React, { useEffect, useState } from "react";
import "./news.css";
import { Article } from "../../types/news";
import { apiNews } from "../../services/api/api-news";
import { useAppSelector } from "../../app/hooks";
import { selectNews } from "../../slices/news-slice";

const NewsComponent: React.FC = () => {
  const news = useAppSelector(selectNews);

  return (
    <div className="articles">
      {news.map((article) => (
        <div key={article.title} className="article">
          <a className="news=link" href={article.url} target="_blank">
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
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
