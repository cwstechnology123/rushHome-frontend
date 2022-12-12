import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";

export default function AgentCard({ agent, index }) {
    const [src, setSrc] = useState(agent.picture.original);
    // console.log(agent.picture)
    return (
        <div key={'card-'+index} className="agent-card style1">
            <div key={'image-box-'+index} className="agent-img mx-auto">
                <Image  key={'image-'+index}
                    placeholder="blur"
                    blurDataURL={blurImage.src}
                    src={src} 
                    width={150} height={150} 
                    onError={() => setSrc(defaultAgentImage.src)}
                    alt="Agent Image"/>
            </div>
            <div key={'card-info-'+index}  className="agent-info-wrap">
                <div key={'agent-'+index} className="agent-info">
                    <h5><Link href={`/agent/${agent.id}`} passHref>{agent.name}</Link></h5>
                    <span>Real Estate Agent</span>
                    <ul className="social-profile list-style style1">
                    <li key={"twitter-"+index}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                        <i className="flaticon-twitter" />
                        </a>
                    </li>
                    <li key={"facebook-"+index}>
                        <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                        <i className="flaticon-facebook" />
                        </a>
                    </li>
                    <li key={"-skype"+index}>
                        <a target="_blank" rel="noreferrer" href="#">
                        <i className="fa fa-skype" aria-hidden="true" />
                        </a>
                    </li>
                    <li key={"linkedin"+index}>
                        <a target="_blank" rel="noreferrer" href="https://linkedin.com/">
                        <i className="flaticon-linkedin-1" />
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="mail_Box">
                    <p>{agent.email}</p>
                    {/* <span>{agent.phone}</span> */}
                </div>
            </div>
        </div>
    );
};