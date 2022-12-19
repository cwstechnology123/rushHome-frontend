import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { addDays, addMonths, differenceInMonths, format, isSameDay, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useEffect, useState, useContext } from "react";

function dateView(startDate, lastDate, selectDate, getSelectedDay) {
    // console.log(startDate, lastDate, selectDate, getSelectedDay)
    const [selectedDate, setSelectedDate] = useState(null);
    
    const selectedStyle = 'active';

    const getStyles = (day) => {
        return isSameDay(day, selectedDate)? selectedStyle : null;
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

    const onDateClick = day => {
        setSelectedDate(day);
        if (getSelectedDay) {
            getSelectedDay(day);
        }
    };

    useEffect(() => {
        if (getSelectedDay) {
            if (selectDate) {
                getSelectedDay(selectDate);
            } else {
                getSelectedDay(startDate);
            }
        }
    }, []);

    useEffect(() => {
        if (selectDate) {
            if (!isSameDay(selectedDate, selectDate)) {
                setSelectedDate(selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                    }
                }, 20);
            }
        }
    }, [selectDate]);

    return renderDays();
}

const DatePicker = (props) => {

    const startDate = props.startDate || new Date();
    const lastDate = addDays(startDate, props.days || 100);

    let dateComponents = dateView(startDate, lastDate, props.selectDate, props.getSelectedDay);
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

    return (
        <div className="container p-0" style={{position: 'relative'}}>
            <ScrollMenu 
                LeftArrow={LeftArrow} 
                RightArrow={RightArrow} 
                style={{overflow: 'hidden'}} 
                transitionBehavior={'smooth'}
                transitionDuration={1500}
                scrollContainerClassName="mx-1"
                separatorClassName="m-1"
            >
                {dateComponents.map(DateBox => (
                    DateBox
                ))}
            </ScrollMenu>
            
        </div>
    )
}

export default DatePicker;