import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaDollarSign, FaPercent } from "react-icons/fa";

export default function Mortgage({ price }) {
    
    const [mortgage, setMortgage] = useState({
        amountPaid: 0,
        interestPaid: 0
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
        // down_payment
        // duration
        // rate
        if(period === 'monthly'){
            rate = (rate / 1200);
            duration = duration * 12;
        }else{
            rate = (rate/100);
        }
        let paymentAmount = ( (total_amount - down_payment) * ( rate * (Math.pow( (1+rate), duration )) ) )/ (Math.pow( (1+rate), duration ) - 1)
        setMortgage({
            amountPaid: paymentAmount.toFixed(2),
            interestPaid: ((paymentAmount.toFixed(2) * duration) - total_amount)
        });
        setShowmodal(true);
        //console.log(showmodal, mortgage)
        
    }
    const handleModalClose = () => {
        setMortgage({
            amountPaid: 0,
            interestPaid: 0
        });
        setShowmodal(false);
        reset();
    }

    const PaymentModal = () => (
        <div className={`modal fade ${showmodal? 'show' : ''}`} id="calculateModal" style={{display: (showmodal? 'block' : 'none')}}>
            <div className="modal-dialog">
                <div className="modal-content">
            
                    <div className="modal-header">
                        <h4 className="modal-title">Mortgage Payment</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={handleModalClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                    Your monthly payment will be <strong>{Number(mortgage.amountPaid).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong> and total interest payable is <strong>{Number(mortgage.interestPaid).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal" onClick={handleModalClose}>Close</button>
                    </div>
            
                </div>
            </div>
        </div>
    )

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
                                    <input type="number" className="form-control" name="down_payment" id="down_payment" {...register('down_payment', { value: parseFloat(price)/2 } )} step={1}/>
                                </div>
                               
                                <span className="text-danger">{errors.down_payment?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Interest Rate</label>
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <FaPercent width={16} height={16} fill="currentColor" />
                                    </div>
                                    <input type="number" className="form-control" name="rate" id="rate" step={0.1}{...register('rate', { value: 1 } )}/>
                                </div>
                                
                                <span className="text-danger">{errors.rate?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Number of Years</label>
                                <input type="number" className="form-control" name="duration" id="duration" {...register('duration', { value: 1 } )}/>
                                <span className="text-danger">{errors.duration?.message}</span>
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Payment Period</label>
                                <select id="period" className="form-select" name="period" {...register('period')}>
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
            <PaymentModal />
            
        </>
    )
}