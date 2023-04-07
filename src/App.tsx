import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomeView from "./views/home/home";
import NewsView from "./views/news/news";
import RankingView from "./views/ranking/ranking";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="ranking" element={<RankingView />} />
          <Route path="news" element={<NewsView />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
