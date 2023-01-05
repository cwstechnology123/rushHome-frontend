import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { memo, useState } from "react";
import { FaDollarSign, FaPercent } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";

const Mortgage = ({ price,hoa, ptax }) => {
    
    const [mortgage, setMortgage] = useState({
        pi: 0,
        taxes: 0,
        insurance: 0,
        monthlyPay: 0,
    });
    const [showmodal, setShowmodal] = useState(false);
    const schema = yup.object().shape({
        total_amount: yup.number().label('Total Amount').transform((v, o) => o === '' || Number.isNaN(0) ? 0 : v),
        down_payment: yup.number().min(0).max(Number(price)).integer().label('Down Payment').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v),
        rate: yup.number().required().min(1).lessThan(100).positive().label('Interest Rate').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v),
        duration: yup.number().min(1).required().positive().integer().label('Number of Years').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v)
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const calculateMortgage = ({ total_amount, down_payment, rate, duration, period }) => {
        let hoaAmt = hoa? parseInt(hoa) : 0;
        let taxAmt = ptax? parseInt(ptax) : 0;
        let downPercent = 0;
        let homeIns = 65;
        if(taxAmt){
            taxAmt = parseFloat(taxAmt/12);
        }
        let loan_amt = (total_amount - down_payment);
        if(down_payment){
            downPercent = Math.round(((total_amount - down_payment) / total_amount) * 100);
        }
        
        if(period === 'monthly'){
            rate = (rate / 1200);
            duration = duration * 12;
        }else{
            rate = (rate/100);
        }
        let rate_per_month = parseFloat(Math.pow((1+rate), duration));
        // console.log(total_amount, down_payment, rate, duration, hoaAmt, taxAmt, downPercent)
        let paymentAmount = parseFloat(loan_amt * ((rate * rate_per_month) / (rate_per_month - 1)))
        let monthlyPay = (paymentAmount + taxAmt + hoaAmt + homeIns);
        setMortgage({
            pi: paymentAmount,
            taxes: taxAmt,
            insurance: homeIns,
            monthlyPay: monthlyPay.toFixed(2),
        });
        setShowmodal(true);        
    }
    const handleModalClose = () => {
        setMortgage({
            pi: 0,
            taxes: 0,
            insurance: 0,
            monthlyPay: 0,
        });
        setShowmodal(false);
        // reset();
    }
    const PaymentModal = (props) => {
        return (
            <Modal
              {...props}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              id="calculateModal"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Mortgage Repayment Summary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <table className="table table-striped">
                    <tbody>
                        {/*<tr>
                            <th>House Price</th>
                            <td>{Number(mortgage.housePrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Down Payment</th>
                            <td>{Number(mortgage.downPayment).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Loan Amount</th>
                            <td>{Number(mortgage.loanAmount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Mortgage Payment</th>
                            <td>{Number(mortgage.mortgagePayment).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Total Interest</th>
                            <td>{Number(mortgage.totalInterest).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        */}
                        <tr>
                            <th>Principle & Interest</th>
                            <td>{Number(mortgage.pi).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Taxes</th>
                            <td>{Number(mortgage.taxes).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr>
                            <th>Insurance</th>
                            <td>{Number(mortgage.insurance).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                        <tr className="bg-success text-white">
                            <th>Monthly Payment</th>
                            <td>{Number(mortgage.monthlyPay).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                    </tbody>
                </table>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <div className="calculator_box heading_line mt-4">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Mortgage Calculator</h2>
                        <hr />
                        <div className="calculation_wrapper">
                        <form className="row g-3" onSubmit={handleSubmit(calculateMortgage)}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Total Amount</label>
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <FaDollarSign width={16} height={16} fill="currentColor"/>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /> </svg>*/}
                                        </div>
                                        <input type="number" className="form-control" name="total_amount" id="total_amount" {...register('total_amount', { value: parseFloat(price) } )} readOnly/>
                                    </div>
                                    <span className="text-danger">{errors.total_amount?.message}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Down Payment</label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                    <FaDollarSign width={16} height={16} fill="currentColor"/>    
                                    </div>
                                    <input type="number" className="form-control" name="down_payment" id="down_payment" {...register('down_payment', { value: Math.round(parseFloat(price)* 0.2) } )} step={1}/>
                                </div>
                               
                                <span className="text-danger">{errors.down_payment?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Interest Rate</label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <FaPercent width={16} height={16} fill="currentColor" />
                                    </div>
                                    <input type="number" className="form-control" name="rate" id="rate" step={0.001}{...register('rate', { value: 6.7 } )}/>
                                </div>
                                
                                <span className="text-danger">{errors.rate?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Number of Years</label>
                                <input type="number" className="form-control" name="duration" id="duration" {...register('duration', { value: 30 } )}/>
                                <span className="text-danger">{errors.duration?.message}</span>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Payment Period</label>
                                <select id="period" className="form-control" name="period" {...register('period')}>
                                    <option value={'monthly'}>Monthly</option>
                                    {/* <option value={'yearly'}>Yearly</option> */}
                                </select>
                                
                            </div>
                            <div className="col-md-6">
                                <button type="submit" className="btn w-100 style1 button_custom">Calculate</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentModal
                show={showmodal}
                onHide={() => handleModalClose(false)}
            />
        </>
    )
}

export default memo(Mortgage);