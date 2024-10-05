import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Administration from './pages/Administration';
import President from './pages/President';
import VicePresident from './pages/VicePresident';
import Cabinet from './pages/Cabinet';
import Priorities from './pages/Priorities';
import BriefingRoom from './pages/BriefingRoom';
import BriefingArticle from './pages/BriefingArticle'; // New article page for each briefing

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/president" element={<President />} />
        <Route path="/vice-president" element={<VicePresident />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/priorities" element={<Priorities />} />
        <Route path="/briefing-room" element={<BriefingRoom />} />
        <Route path="/briefing-room/:articleId" element={<BriefingArticle />} /> {/* Dynamic route for individual article */}
      </Routes>
    </Router>
  );
}

export default App;
