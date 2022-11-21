import Image from "next/image"
import Link from "next/link";

export default function AgentCard({ index }) {

    return (
        <div className="agent-card style1">
            <div className="agent-img">
                <img src="assets/img/agents/agent-1.jpg" alt="Image" />
            </div>
            <div className="agent-info-wrap">
                <div className="agent-info">
                    <h3><Link href={`/agents/${index}`} passHref>Erik Ondricka</Link></h3>
                    <span>Real Estate Agent</span>
                    <ul className="social-profile list-style style1">
                    <li>
                        <a target="_blank" href="https://twitter.com/">
                        <i className="flaticon-twitter" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://facebook.com/">
                        <i className="flaticon-facebook" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="#">
                        <i className="fa fa-skype" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://linkedin.com/">
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