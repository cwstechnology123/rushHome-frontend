import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function PropertyAgentCard({ agent, address, slug }) {
    const router = useRouter();
    if(agent.listAgentEmail.endsWith("@rushhome.com")){
        
        const handleAgentSubmit = (ev) => {
            ev.preventDefault();
            localStorage.setItem('overridePath', '/property/'+slug);
            toast.error('You need to sign in...');
            router.push('/auth/client-signin')
        }


        const src = defaultAgentImage.src;
        return (
            <>
            <div className="col-lg-12 col-xl-12 col-md-12">
                <div className="listing_agentbox">
                    <h2>Listing Agent</h2>
                    <div className="media d-flex w-100">
                        <img src={src} className="align-self-center mr-3 img-circle" alt="Agent Image" style={{width:100, marginRight:10}} />
                        <div className="media-body text-left">
                            <h5>{agent.listAgentFullName}</h5>
                            <h6>Rush<span style={{color: '#FFC107'}}>Home</span></h6>
                            {agent.listAgentEmail}
                            {(agent.listAgentOfficePhone!="") && (
                                <>
                                <br/>P: ({agent.listAgentOfficePhoneExt}) {agent.listAgentOfficePhone}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="askquestion">
                        <h2>Ask a question:</h2>
                        <div className="col-12">
                            <div className="form-group">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 150}} defaultValue={`I would like more information on ${address}`} />
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn style2 contact_button" onClick={handleAgentSubmit}>Ask a Question</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return null;
    }
}