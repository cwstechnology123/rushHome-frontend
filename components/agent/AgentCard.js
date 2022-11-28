import Image from "next/image"
import Link from "next/link";

export default function AgentCard({ index }) {

    return (
        <div key={'card-'+index} className="agent-card style1">
            <div key={'image-'+index} className="agent-img">
                <img src="assets/img/agents/agent-1.jpg" alt="Image" />
            </div>
            <div key={'card-info-'+index}  className="agent-info-wrap">
                <div key={'agent-'+index} className="agent-info">
                    <h3><Link href={`/agent/${index}`} passHref>Erik Ondricka</Link></h3>
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
                    <p>oliverbeddows@homeid.com</p>
                    <span>123 900 686668</span>
                </div>
            </div>
        </div>
    );
};