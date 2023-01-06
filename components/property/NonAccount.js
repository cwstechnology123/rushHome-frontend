import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import RequestInfo from "./RequestInfo";
import ScheduleTour from "./ScheduleTour";

export default function NonAccount({ address, fubObj }) {
    // const [activeTab, setActiveTab] = useState('schedule-tour');
    const [reqmodal, setReqmodal] = useState(false);
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
    const handleRequestModalClose = () => {
        setReqmodal(false)
    }
    const ScheduleRequestModal = () => (
        <div className={`modal fade ${reqmodal? 'show' : ''}`} id="requestModal" style={{display: (reqmodal? 'block' : 'none')}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3 className="text-center my-5">Request Send</h3>
                    </div>
                    <div className="modal-footer justify-content-center border-0">
                        <button type="button" className="btn style2 contact_button" onClick={()=>(handleRequestModalClose())}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
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
                    <ScheduleTour onInit={tabStatus.scheduleTab} fubObj={fubObj} setReqmodal={setReqmodal}/>
                </Tab>
                <Tab eventKey="profile" title="Request Info">
                    <RequestInfo address={address} onInit={tabStatus.requestTab} fubObj={fubObj} setReqmodal={setReqmodal}/>
                </Tab>
            </Tabs>
        </div>
        <ScheduleRequestModal />
        </>
    );
}