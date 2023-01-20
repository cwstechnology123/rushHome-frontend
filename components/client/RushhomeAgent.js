import Link from "next/link";

export default function RushhomeAgent() {

    return (
        <>
        <div className="rushhome_agent">
            <h3>Your Rush Home Agent</h3>
            <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6">
                <h3>Felecia Brown</h3>
                <p>Realtor</p>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6">
                <div className="rightrushome">
                    <p><Link href="/"><i className="fa fa-user-o" aria-hidden="true" /> Profile</Link></p>
                    <p><Link href="/"><i className="fa fa-envelope-o" aria-hidden="true" /> Messages</Link></p>
                    <p><Link href="/"><i className="fa fa-phone" aria-hidden="true" /> Call</Link></p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}