import Footer from "./components/Footer/Footer";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import AgentsPage from "./containers/AgentPage/AgentPage";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="agents/:agentName" element={<AgentsPage />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
