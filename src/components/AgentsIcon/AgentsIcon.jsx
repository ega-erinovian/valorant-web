import React from 'react'

// Import constant url
import { AGENT_ICON_URL } from "../../utils/Const";

// import css
import "./AgentsIcon.css"

const AgentsIcon = ({agentId, agentName, classIcon}) => {
  return (
    <>
        <div key={agentId} className="agents-icon" >
            <a href={"/agents/" + agentName}>
                <img src={AGENT_ICON_URL + agentName + ".webp"} alt="agent-icon" className={"agent-icon " + classIcon} />
            </a>
        </div>
    </>
  )
}

export default AgentsIcon