import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import RequestInfo from "../../components/property/RequestInfo";
import ScheduleTour from "../../components/property/ScheduleTour";

export default function NonAccount({ address, fubObj }) {
    // const [activeTab, setActiveTab] = useState('schedule-tour');
    const [tabStatus, setTabStatus] = useState({
        scheduleTab: true,
        requestTab: false
    });
    const handleTabClick = (tabName) => {
        (tabName === 'home')? setTabStatus({
            scheduleTab: true,
            requestTab: false
        }) : setTabStatus({
            scheduleTab: false,
            requestTab: true
        });
    }
    // console.log(tabStatus)
    return (
        <>
        <div id="exTab3">
            <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className=""
                justify
                onSelect={handleTabClick}
            >
                <Tab eventKey="home" title="Schedule Tour">
                    <ScheduleTour onInit={tabStatus.scheduleTab} fubObj={fubObj}/>
                </Tab>
                <Tab eventKey="profile" title="Request Info">
                    <RequestInfo address={address} onInit={tabStatus.requestTab} fubObj={fubObj} />
                </Tab>
            </Tabs>
        </div>
        
        </>
    );
}