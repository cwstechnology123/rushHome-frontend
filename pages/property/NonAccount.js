import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import RequestInfo from "../../components/property/RequestInfo";
import ScheduleTour from "../../components/property/ScheduleTour";

export default function NonAccount({ address }) {
    // const [activeTab, setActiveTab] = useState('schedule-tour');
    const [tabStatus, setTabStatus] = useState({
        scheduleTab: true,
        requestTab: false
    });
    // const handleTabClick = (tabName) => {
    //     (tabName === 'schedule-tour')? setTabStatus({
    //         scheduleTab: true,
    //         requestTab: false
    //     }) : setTabStatus({
    //         scheduleTab: false,
    //         requestTab: true
    //     });
    //     setActiveTab(tabName);
    // }
    // console.log(tabStatus)
    return (
        <>
        {/* <div id="exTab3">	
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
        </div> */}
        <div id="exTab3">
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className=""
                justify
            >
                <Tab eventKey="home" title="Home">
                    <ScheduleTour onInit={tabStatus.scheduleTab} />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <RequestInfo address={address} onInit={tabStatus.requestTab} />
                </Tab>
            </Tabs>
        </div>
        
        </>
    );
}