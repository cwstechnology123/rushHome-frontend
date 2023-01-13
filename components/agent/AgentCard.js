import Image from "next/image"
import Link from "next/link";
import agentList from "../../utils/fub_numbers.json";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png"
import blurImage from "../../public/assets/img/placeholder.png";
import { useState } from "react";

export default function AgentCard({ agent }) {
    const [src, setSrc] = useState(agent.picture.original);
    const phoneBlk = agentList.find(person => (person.email === (agent.email).toLowerCase()));
    // console.log(agent.email, agent.picture.original)
    return (
        <Link href={`/agent/${agent.id}`}>
            <div key={'card-'+agent.id} className="agent-card style1">
                <div key={'image-box-'+agent.id} className="agent-img mx-auto">
                    <Image  key={'image-'+agent.id}
                        placeholder="blur"
                        blurDataURL={blurImage.src}
                        src={src} 
                        loading={'lazy'}
                        width={150} height={150} 
                        onError={() => setSrc(defaultAgentImage.src)}
                        alt="Agent Image"/>
                </div>
                <div key={'card-info-'+agent.id}  className="agent-info-wrap">
                    <div key={'agent-'+agent.id} className="agent-info">
                        <h5>{agent.name}</h5>
                        <span>Real Estate Agent</span>
                    </div>
                    <div className="mail_Box">
                        <p>{(agent.email).toLowerCase()}</p>
                        <span>{phoneBlk?.contact}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};