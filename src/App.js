import Footer from "./components/Footer/Footer";
import AgentsPage from "./containers/AgentPage/AgentPage";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="Agents/:agentName" element={<AgentsPage />} exact />
          <Route path="About" element={<AboutPage />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
