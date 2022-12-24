import Image from "next/image"
import Link from "next/link";
import agentList from "../../utils/fub_numbers.json";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";

export default function AgentCard({ agent }) {
    // const [src, setSrc] = useState(agent.picture?.original);
    // console.log(agent.picture)
    // console.log(src)
    const phoneBlk = agentList.find(person => (person.email === agent.email));
    // console.log("Phone: ", phoneBlk);
    const src = agent.picture.original ?? defaultAgentImage.src;
    return (
        <div key={'card-'+agent.id} className="agent-card style1">
            <div key={'image-box-'+agent.id} className="agent-img mx-auto">
                <Image  key={'image-'+agent.id}
                    placeholder="blur"
                    blurDataURL={blurImage.src}
                    src={src} 
                    width={150} height={150} 
                    // onError={() => setSrc(defaultAgentImage.src)}
                    alt="Agent Image"/>
            </div>
            <div key={'card-info-'+agent.id}  className="agent-info-wrap">
                <div key={'agent-'+agent.id} className="agent-info">
                    <h5><Link href={`/agent/${agent.id}`} passhref>{agent.name}</Link></h5>
                    <span>Real Estate Agent</span>
                    <ul className="social-profile list-style style1">
                    <li key={"twitter-"+agent.id}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                        <i className="flaticon-twitter" />
                        </a>
                    </li>
                    <li key={"facebook-"+agent.id}>
                        <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                        <i className="flaticon-facebook" />
                        </a>
                    </li>
                    <li key={"-skype"+agent.id}>
                        <a target="_blank" rel="noreferrer" href="#">
                        <i className="fa fa-skype" aria-hidden="true" />
                        </a>
                    </li>
                    <li key={"linkedin"+agent.id}>
                        <a target="_blank" rel="noreferrer" href="https://linkedin.com/">
                        <i className="flaticon-linkedin-1" />
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="mail_Box">
                    <p>{agent.email}</p>
                    <span>{phoneBlk?.phone}</span>
                </div>
            </div>
        </div>
    );
};