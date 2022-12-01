import React, { Component } from "react";

// Import css
import "./AgentPage.css"

// Import constant url
import { AGENT_ART_URL, AGENT_VIDEO_URL} from "../../utils/Const";

// Import agents data
import { agentsData } from "../../AgentsData";

// Import Components
import SelectAgentsComp from "../../components/SelectAgents/SelectAgents";
import AgentsDesc from "../../components/AgentsDesc/AgentsDesc";
import AgentSkill from "../../components/AgentsSkill/AgentsSkill";
import NavbarComp from "../../components/NavbarComp/NavbarAgents/NavbarComp";

export default class AgentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents: agentsData,
    };
  }

  render() {
    let { agents } = this.state;

    // Get current URL to get the name of the agent
    let currentURL = window.location.href.split("/");

    // Get the index of selected agent
    let agentIndex = agents
      .map((agent) => {
        return agent.agentName;
      })
      .indexOf(currentURL[4]);
    return (
      <>
        <NavbarComp />
        <div className="agents-header-container">
          <video autoPlay muted loop id="myVideo">
              <source src={AGENT_VIDEO_URL + "agent-header-bg.mp4"} type="video/mp4" />
          </video>
          <div className="header-overlay"></div>
          <div className="agents-header-section text-white">
              <div className="img-container w-100 d-flex justify-content-center" id="agentArt" data-speed="-0.2">
                  <img src={AGENT_ART_URL + currentURL[4] + ".webp"} alt="header-char"  id="agentArt_img"/>
              </div>
          </div>
          <div className="container">
              <div className="agent-header-text">
                  <div className="agent-number-container" id="agentNumber">
                      <h1><strong>{agents[agentIndex].id}</strong></h1>
                  </div>
                  <div className="agent-desc-container">
                      <AgentsDesc id="agentDesc" agentName={agents[agentIndex].agentName} agentBio={agents[agentIndex].bio} agentRole={agents[agentIndex].role} />
                  </div>
              </div>
          </div>
          <AgentSkill agentName={agents[agentIndex].agentName}  />
          <div className="container">
              <SelectAgentsComp agentIndex={agentIndex} />
          </div>
        </div>
      </>
    );
  }
}
