import React, { useState } from "react";
// import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "./calendar.css";

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    return (
    <div className="myCalendar" id="calendar-text">
        <Calendar showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)};
        {/* {date.toString()} */}
        </div>
    );
};

// render(<ReactCalendar />, document.querySelector("#root"));
export default ReactCalendar;