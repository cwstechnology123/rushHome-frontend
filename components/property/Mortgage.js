import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function Mortgage({ price }) {
    
    const [mortgage, setMortgage] = useState({
        amountPaid: 0,
        interestPaid: 0
    });
    const [showmodal, setShowmodal] = useState(false);
    const schema = yup.object().shape({
        total_amount: yup.number().default(Number(price)).label('Total Amount').transform((v, o) => o === '' || Number.isNaN(0) ? 0 : v),
        down_payment: yup.number().default(0).min(0).max(Number(price)).integer().label('Down Payment').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v),
        rate: yup.number().required().default(1).min(1).lessThan(100).positive().label('Interest Rate').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v),
        duration: yup.number().default(1).min(1).required().positive().integer().label('Number of Years').transform((v, o) => o === '' || Number.isNaN(o) ? 0 : v)
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
            <div className="Calculator_box heading_line mt-4">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Mortgage Calculator</h2>
                        <hr />
                        <div className="calculation_wraper">
                        <form className="row g-3" onSubmit={handleSubmit(calculateMortgage)}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Total Amount</label>
                                    <input type="number" className="form-control" name="total_amount" id="total_amount" {...register('total_amount')} value={parseFloat(price)} readOnly/>
                                    <span className="text-danger">{errors.total_amount?.message}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Down Payment</label>
                                <input type="number" className="form-control" name="down_payment" id="down_payment" {...register('down_payment')} step={1}/>
                                <span className="text-danger">{errors.down_payment?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Interest Rate</label>
                                <input type="number" className="form-control" name="rate" id="rate" step={0.1}{...register('rate')}/>
                                <span className="text-danger">{errors.rate?.message}</span>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Number of Years</label>
                                <input type="number" className="form-control" name="duration" id="duration" {...register('duration')}/>
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