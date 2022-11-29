import React, { Component } from "react";

// Import CSS
import "./HomePage.css";

// Import constant url
import { AGENT_ART_URL } from "../../utils/Const";

// Import Components
import SelectAgents from "../../components/SelectAgents/SelectAgents";

export default class HomeComp extends Component {
  render() {
    return (
      <div>
        <section className="header-section">
          <div className="header-content"></div>
          <div className="img-container" id="agentArt">
            <img src={AGENT_ART_URL + "All.webp"} alt="header-char"/>
          </div>
        </section>
        <div className="body-padding">
          <SelectAgents />
        </div>
      </div>
    );
  }
}
