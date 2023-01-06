import useSWR from "swr";
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import Image from "next/image";

export default function PropertyAgentCard({ agent, address }) {
    // console.log(agent.listAgentEmail.search(/rushhome/i))
    // if(agent.listAgentEmail.search(/rushhome/i) == -1){
    //     return null;
    // }
    // console.log(agent.listAgentEmail.search(/rushhome/i))
    // const fetcher = async (payload) => await fetchFubApi(payload).then(res => res.data);
    // const { data, error, isLoading, isValidating } = useSWR((agent.listAgentEmail.search(/rushhome/i)>0)? {url : `${fubApiBaseUrl}/users?role=Agent&email=${agent.listAgentEmail}`, method : 'GET'} : null, fetcher);
    // console.log(data)
    if(agent.listAgentEmail.endsWith("@rushhome.com")){
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
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 150}} value={`I would like more information on ${address}`} />
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn style2 contact_button">Ask a Question</button>
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