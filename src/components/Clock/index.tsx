import ClockDigit from "../ClockDigit";
import React, {useEffect, useState} from "react";

interface ClockProps {
    date?: Date,
}

const Clock = ({date = new Date()}: ClockProps) => {

    const [time, setTime] = useState(date.getHours()*60 + date.getMinutes());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 60000)
        return () => clearInterval(interval)
    }, [setTime]);

    useEffect(() => {
        if (time === 24*60) {
            setTime(0)
        }
    }, [time, setTime])
    

    const minutes = time % 60;
    const hours = Math.floor(time / 60);


    return (
        <div>
            <ClockDigit digit={Math.floor(hours/10)}/>
            <ClockDigit digit={hours % 10}/>
            :
            <ClockDigit digit={Math.floor(minutes/10)}/>
            <ClockDigit digit={minutes % 10}/>
        </div>
    )
}

export default Clock;