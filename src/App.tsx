import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LeagueList from "./components/leagueslist/leaguelist";
import Navbar from "./components/navbar/navbar";
import HomeView from "./views/home/home";
import RankingView from "./views/ranking/ranking";
import StandingsView from "./views/standings/standings-view";

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="ranking" element={<RankingView />} />
          <Route path="/standings/:leagueId" element={<StandingsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
