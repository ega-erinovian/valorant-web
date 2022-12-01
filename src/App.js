import Footer from "./components/Footer/Footer";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import AgentsComp from "./containers/AgentPage/AgentPage";
import HomeComp from "./containers/HomePage/HomePage";

function App() {
  return (
    <>
      <NavbarComp />
      <AgentsComp/>
      <Footer />
    </>
  );
}

export default App;
