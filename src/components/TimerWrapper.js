
import Buttons from "./Buttons.js";
import Time from "./Time.js";
import {useState, useEffect} from "react";


export default function TimerWrapper() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)

    function startTime(){
        setIsPaused(false);
    }

    function pauseTime(){
        setIsPaused(true);
    }

    function stopTime(){
        setIsDisabled(true);
        setIsPaused(true);
    }

    function resetTime(){
        setIsDisabled(false);
        setIsPaused(true);
        setMinutes(0);
        setHours(0);
        setSeconds(0);
        setMilliseconds(0);
    }

    useEffect( ()=>{

        const timerInterval = setInterval( ()=>{
    
            if(isPaused === false){
                setMilliseconds(milliseconds+1)

                    if (milliseconds > 100){
                        setMilliseconds(0)
                        setSeconds(seconds+1)
                        
                    }
    
                    if (seconds > 59){
                        setSeconds(0)
                        setMinutes(minutes+1)
                        
                    }
    
                    if (minutes > 59){
                        setMinutes(0)
                        setHours(hours+1)
                        
                    }
    
                    if (hours > 23){
                        setHours(0);
                        resetTime();
                        alert("24 hours has passed, please go outside")
                    }

    
            }
    
        },10)

        return (()=> clearInterval(timerInterval))
    })



    return (
      <div>
        <Time hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
        <Buttons isDisabled={isDisabled} onStartTime={startTime} onPauseTime={pauseTime} onStopTime={stopTime} onResetTime={resetTime} />
      </div>
    );
}
  

