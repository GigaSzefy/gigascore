import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectStandings } from "../../slices/standings-slice";
import "./league-info.css"
import LeagueStandings from "../standings/standings-component";
import { useState } from "react";
import LeagueNews from "../league-news/league-news";
import LeagueFixtures from "../league-fixtures/league-fixtures";
import LeagueTopScorers from "../league-top-scorers/league-top-scorers";


const LeagueInfo : React.FC = () => {
    let standingsData = useAppSelector(selectStandings);
    const  [activeTab, setActiveTab] = useState('standings')

    const handleTab = (tab:string) => {
        setActiveTab(tab)
        
    }

    return  (
        <div>
        {standingsData.map((item) => (
            <div className="header-league" key={item.league.id}>
              <div className="header-logo">
                <img title="logo" src={item.league.logo}></img>
              </div>
              <div className="header-name">{item.league.name}</div>
              <div className="header-season">{item.league.season}</div>
            </div>
          ))}
          <div className="tabs">
            <p className={activeTab === 'standings' ? 'active-tab' : ''} onClick ={ () => handleTab('standings')}>Standings</p>
            <p className={activeTab === 'fixtures' ? 'active-tab' : ''} onClick={() => handleTab('fixtures')}>Fixtures</p>
            <p className={activeTab ==='news' ? 'active-tab' : ''} onClick={() => handleTab('news')}>News</p>
            <p className={activeTab ==='top-scorers' ? 'active-tab' : ''} onClick={() => handleTab('top-scorers')}>Top Scorers</p>
          </div>
          <div>
            {activeTab === 'standings' && <LeagueStandings />}
            {activeTab === 'fixtures' && <LeagueFixtures />}
            {activeTab === 'news' && <LeagueNews />}
            {activeTab === 'top-scorers' && <LeagueTopScorers />}
          </div>
          </div>
    );
};

export default LeagueInfo