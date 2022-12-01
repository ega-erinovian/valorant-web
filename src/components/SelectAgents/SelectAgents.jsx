import React, { Component } from "react";

// Import agents data
import { agentsData } from "../../AgentsData";
import AgentIcon from "../../components/AgentsIcon/AgentsIcon";

// Import css
import "./SelectAgents.css"

export default class SelectAgentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agents: agentsData,
    };
  }

  render() {
    const { agentIndex } = this.props;
    const { agents } = this.state;
    return (
      <section className="select-agent-cont" id="agents">
        <h1><strong>SELECT AN AGENT</strong></h1>
        <div className="select-agents-grid">
          {agents &&
            agents.map((agent) => {
              if(agentIndex-1){
                console.log(agent.id + "=" + agents[agentIndex].id);
                if(agent.id === (agents[agentIndex].id)){
                  return(
                    <AgentIcon key={agent.id} agentId={ agent.id } agentName={ agent.agentName } classIcon="agent-selected"/>
                    )}else{
                  return(
                    <AgentIcon key={agent.id} agentId={ agent.id } agentName={ agent.agentName } classIcon=""/>
                  )};
              }else{
                return(
                  <AgentIcon key={agent.id} agentId={ agent.id } agentName={ agent.agentName } classIcon=""/>
                )};
            })}
        </div>
      </section>
    );
  }
}

