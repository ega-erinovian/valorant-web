// Import from package
import React, { Component} from "react";

// Import constant url
import { SKILL_ICON_URL } from "../../utils/Const";

// Import agents data
import { agentsData } from "../../AgentsData";

// Import css
import "./AgentsSkill.css"

export default class AgentSkill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      agents: agentsData,
    };
  }

  selectSkill(n){
    let skillIcon = document.querySelectorAll("#skillIcon")

    // If one skill selected the class on other skill will be removed
    switch (n) {
      case 0:
        skillIcon[0].classList.add("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 1:
        skillIcon[1].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 2:
        skillIcon[2].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
      case 3:
        skillIcon[3].classList.add("skill-selected");
        skillIcon[0].classList.remove("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        break;
      default:
        skillIcon[0].classList.add("skill-selected");
        skillIcon[1].classList.remove("skill-selected");
        skillIcon[2].classList.remove("skill-selected");
        skillIcon[3].classList.remove("skill-selected");
        break;
    }
  }

  render() {
    let { agentName } = this.props;
    let { agents, index } = this.state;

    // Get the index of selected agent
    let agentIndex = agents
      .map((agent) => {
        return agent.agentName;
      })
      .indexOf(agentName);
    return (
      <>
        <section className="agent-skill container">
          <h1 className="agent-skill-title"><strong>AGENT ABILITIES</strong></h1>
          <div className="agent-skill-container">
            <div className="agent-icon-desc-container" lg={5}>
              <div className="skill-icon-container">
                { agents[agentIndex].skills &&
                  agents[agentIndex].skills.map((skill) => (
                    <div key={(skill.id)} className="skill-icon-wrapper" xs={3}>
                      <img src={SKILL_ICON_URL + agents[agentIndex].agentName + "/" + skill.skillName + ".webp"} alt="skill-icon" id="skillIcon" className="agent-skill-icon p-3" onClick={() => {
                        this.selectSkill((skill.id-1))
                        this.setState({index: skill.id-1}, function(){
                          // To reload the video everytime user click the skill icon
                          this.refs.video.load();
                        })
                      }} />
                    </div>
                  ))}
              </div>
              <div className="skill-description">
                <h3 className="skill-title-wrapper">
                  <div className="skill-badges-key">
                    {agents[agentIndex].skills[index].skillKey}
                  </div>
                  <strong>{agents[agentIndex].skills[index].skillName}</strong>
                </h3>
                <p>{agents[agentIndex].skills[index].skillDesc}</p>
              </div>
            </div>
            <div className="agent-skill-vid-container" style={{ overflow: "hidden" }}> {/* Col */}
              <video preload="true" muted loop autoPlay className="agent-skill-vid" ref='video'>
                <source src={agents[agentIndex].skills[index].skillVid} type="video/mp4"/>
              </video>
            </div>
          </div>
        </section>
      </>
    );
  }
}
