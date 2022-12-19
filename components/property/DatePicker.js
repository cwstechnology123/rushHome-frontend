import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { addDays, addMonths, differenceInMonths, format, isSameDay, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useEffect, useState, useContext } from "react";

function dateView(startDate, lastDate, selectedDate, onDateClick) {
    // console.log(startDate, lastDate, selectDate, getSelectedDay)
    //const [selectedDate, setSelectedDate] = useState(null);
    
    // const selectedStyle = 'active';

    const getStyles = (day) => {
        return isSameDay(day, selectedDate)? 'active' : '';
    }

    const getId = (day) => {
        return isSameDay(day, selectedDate)? 'selected' : '';
    }

    const renderDays = () => {
        //dd, MMM, yyyy, eee
        const months = [];
        let days = [];

        for(let i = 0; i <= differenceInMonths(lastDate, startDate); i++){
            let start, end;
            const month = startOfMonth(addMonths(startDate, i));

            start = i === 0 ? Number(format(startDate, 'dd')) - 1 : 0;
            end = i === differenceInMonths(lastDate, startDate) ? Number(format(lastDate, 'd')) : Number(format(lastDayOfMonth(month), "d"))

            for(let j = start; j < end; j++){
                let currentDay = addDays(month, j);

                days.push(
                    <div
                        id={`${getId(currentDay)}`}
                        key={currentDay}
                        className={`date-block text-center ${getStyles(currentDay)}`}
                        onClick={() => onDateClick(currentDay)}
                    >
                        <div className="day-week">{format(currentDay, "eee")}</div>
                        <div className="day-date">{format(currentDay, "dd")}</div>
                        <div className="day-month">{format(currentDay, "MMM")}</div>
                    </div>
                )
            }
            months.push(...days);
            days = [];
        }
        return months;
    }

    return renderDays();
}

const DatePicker = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);
    
    const onDateClick = day => {
        setSelectedDate(day);
        if (props.getSelectedDay) {
            props.getSelectedDay(day);
        }
    };

    const startDate = props.startDate || new Date();
    const lastDate = addDays(startDate, props.days || 100);

    // console.log(DateComponent)
    function LeftArrow() {
        const { scrollPrev } = useContext(VisibilityContext)
        
        return (
            <div className='datepicker-left-indicator' onClick={() => scrollPrev()}>
                <span><FaAngleLeft/></span>
            </div>
        );
    }
    
    function RightArrow() {
        const { scrollNext } = useContext(VisibilityContext)
        return (
            <div className='datepicker-right-indicator' onClick={() => scrollNext()}>
                <span><FaAngleRight/></span>
            </div>
        );
    }

    useEffect(() => {
        if (props.getSelectedDay) {
            if (props.selectDate) {
                props.getSelectedDay(props.selectDate);
            } else {
                props.getSelectedDay(startDate);
            }
        }
    }, []);

    useEffect(() => {
        if (props.selectDate) {
            if (!isSameDay(selectedDate, props.selectDate)) {
                setSelectedDate(props.selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                    }
                }, 20);
            }
        }
    }, [props.selectDate]);

    let dateComponents = dateView(startDate, lastDate, selectedDate, onDateClick);

    return (
        <div className="container p-0" style={{position: 'relative'}}>
            <ScrollMenu 
                LeftArrow={LeftArrow} 
                RightArrow={RightArrow} 
                style={{overflow: 'hidden'}} 
                transitionBehavior={'smooth'}
                transitionDuration={1500}
                scrollContainerClassName="mx-1-5"
                separatorClassName="m-1-5"
            >
                {dateComponents.map(DateBox => (
                    DateBox
                ))}
            </ScrollMenu>
            
        </div>
    )
}

export default DatePicker;