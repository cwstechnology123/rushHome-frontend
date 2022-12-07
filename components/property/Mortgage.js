export default function Mortgage() {
    return (
        <div className="Calculator_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Mortgage Calculator</h2>
                    <hr />
                    <div className="calculation_wraper">
                    <form className="row g-3">
                        <div className="col-md-6">
                        <label className="form-label">Total Amount</label>
                        <input type="number" className="form-control" min={1} max={100} />
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Down Payment</label>
                        <input type="number" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Interest Rate</label>
                        <input type="number" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                        <label className="form-label">Number of Years</label>
                        <input type="number" className="form-control"/>
                        </div>
                        <div className="col-md-12">
                        <label htmlFor="inputState" className="form-label">Payment Period</label>
                        <select id="inputState" className="form-select">
                            <option>Monthly</option>
                            <option>...</option>
                        </select>
                        </div>
                        <div className="col-12">
                        <button type="submit" className="btn style1 button_custom">Calculate</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}