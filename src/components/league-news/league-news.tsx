import { useAppSelector } from "../../app/hooks"
import { selectCustomNews } from "../../slices/news-slice"
import "./league-news.css"


const LeagueNews : React.FC = () => {
    const leagueNews = useAppSelector(selectCustomNews)

    return (
        <div className="league-articles">
          {leagueNews.map((article) => (
            <div key={article.title} className="league-article">
              <a className="league-news-link" href={article.url} target="_blank">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="league-art-img"
                />
                <div className="league-art-text">
                  <h2>{article.title}</h2>
                  <div className="league-br"></div>
                  <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
      

}

export default LeagueNews