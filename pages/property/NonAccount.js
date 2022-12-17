import { useState } from "react";
import RequestInfo from "../../components/property/RequestInfo";
import ScheduleTour from "../../components/property/ScheduleTour";

export default function NonAccount({ address }) {
    const [activeTab, setActiveTab] = useState('schedule-tour');
    const [tabStatus, setTabStatus] = useState({
        scheduleTab: true,
        requestTab: false
    });
    const handleTabClick = (tabName) => {
        (tabName === 'schedule-tour')? setTabStatus({
            scheduleTab: true,
            requestTab: false
        }) : setTabStatus({
            scheduleTab: false,
            requestTab: true
        });
        setActiveTab(tabName);
    }
    // console.log(tabStatus)
    return (
        <>
        <div id="exTab3">	
            <ul className="nav nav-tabs nav-justified">
                <li className="nav-item"><button type="button" className={`nav-link ${activeTab==='schedule-tour'? 'active' : ''}`} data-toggle="tab" onClick={()=>handleTabClick('schedule-tour')}><div>Schedule Tour</div></button></li>
                <li className="nav-item"><button type="button" className={`nav-link ${activeTab==='request-info'? 'active' : ''}`} data-toggle="tab" onClick={()=>handleTabClick('request-info')}><div>Request Info</div></button></li>
            </ul>

            <div className="tab-content clearfix">
                <div className={`tab-pane fade ${activeTab==='schedule-tour'? 'show active' : ''}`} id="1b">
                    <ScheduleTour onInit={tabStatus.scheduleTab} />
                </div>
                <div className={`tab-pane fade ${activeTab==='request-info'? 'show active' : ''}`} id="2b">
                    <RequestInfo address={address} onInit={tabStatus.requestTab} />
                </div>
            </div>
        </div>
        {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button type="button" className={`nav-link ${activeTab==='schedule-tour'? 'active' : ''}`} id="schedule-tour" onClick={()=>setActiveTab('schedule-tour')} data-bs-toggle="tab" data-bs-target="#schedule-tour-pane" role="tab" aria-controls="schedule-tour-pane" aria-selected="true">Schedule a Tour</button>
            </li>
            <li className="nav-item" role="presentation">
                <button type="button" className={`nav-link ${activeTab==='request-info'? 'active' : ''}`} id="request-info" onClick={()=>setActiveTab('request-info')} data-bs-toggle="tab" data-bs-target="#request-info-pane" role="tab" aria-controls="request-info-pane" aria-selected="false">Request Info</button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className={`tab-pane fade ${activeTab==='schedule-tour'? 'show active' : ''}`} id="schedule-tour-pane" role="tabpanel" aria-labelledby="schedule-tour" tabIndex={0}>
                <ScheduleTour />
            </div>
            <div className={`tab-pane fade ${activeTab==='request-info'? 'show active' : ''}`} id="request-info-pane" role="tabpanel" aria-labelledby="request-info" tabIndex={1}>
                <RequestInfo address={address}/>
            </div>
        </div> */}
        </>
    );
}