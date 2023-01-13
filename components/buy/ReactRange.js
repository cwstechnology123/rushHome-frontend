import { useEffect, useRef, useState } from "react";

export default function ReactRange({
    minValue,
    maxValue,
    min,
    max,
    steps,
    onChange,
    ...children
}){
    const rangeInputRef = useRef([]);
    const priceInputRef = useRef([]);
    const rangeRef = useRef();
    const priceGap = steps;

    useEffect(() => {
        priceInputRef.current.forEach((input) => {
            input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInputRef.current[0].value),
                maxPrice = parseInt(priceInputRef.current[1].value);
            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputRef.current[1].max) {
                if (e.target.className === "input-min") {
                rangeInputRef.current[0].value = minPrice;
                rangeRef.current.style.left = (minPrice / rangeInputRef.current[0].max) * 100 + "%";
                } else {
                rangeInputRef.current[1].value = maxPrice;
                rangeRef.current.style.right = 100 - (maxPrice / rangeInputRef.current[1].max) * 100 + "%";
                }
            }
            onChange([minPrice, maxPrice])
            });
        });
        return () => {
            priceInputRef.current.forEach((input) => {
                input.removeEventListener("input", ()=>null);
            });
        }
    }, []);
    useEffect(() => {
        rangeInputRef.current.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInputRef.current[0].value),
                    maxVal = parseInt(rangeInputRef.current[1].value);
                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                    rangeInputRef.current[0].value = maxVal - priceGap;
                    } else {
                    rangeInputRef.current[1].value = minVal + priceGap;
                    }
                } else {
                    priceInputRef.current[0].value = minVal;
                    priceInputRef.current[1].value = maxVal;
                    rangeRef.current.style.left = (minVal / rangeInputRef.current[0].max) * 100 + "%";
                    rangeRef.current.style.right = 100 - (maxVal / rangeInputRef.current[1].max) * 100 + "%";
                }
                onChange([minVal, maxVal])
            });
        });
        return () => {
            rangeInputRef.current.forEach((input) => {
                input.removeEventListener("input", ()=>null);
            });
        }
    }, []);
    useEffect(()=>{
        rangeRef.current.style.left = (minValue / max) * 100 + "%";
        rangeRef.current.style.right = 100 - (maxValue / max) * 100 + "%";
    }, []);

    return (
        <>
        <div className="slider">
            <div className="progress" ref={rangeRef}/>
        </div>
        <div className="range-input">
            <input type="range" className="range-min" ref={(element) => {rangeInputRef.current[0] = element}} min={min} max={max} defaultValue={minValue} step={steps} />
            <input type="range" className="range-max" ref={(element) => {rangeInputRef.current[1] = element}} min={min} max={max} defaultValue={maxValue} step={steps} />
        </div>
        <div className="price-input">
            <div className="field">
                <input type="number" className="input-min" ref={(element) => {priceInputRef.current[0] = element}} defaultValue={minValue} />
            </div>
            <div className="separator">-</div>
            <div className="field">
                <input type="number" className="input-max" ref={(element) => {priceInputRef.current[1] = element}} defaultValue={maxValue} />
            </div>
        </div>
        </>
    )
}