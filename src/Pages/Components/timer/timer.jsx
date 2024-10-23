import { useState, useEffect } from 'react';

import './timer.css';

function Timer(props) {
    
    // State
    const [running, setrunning] = useState(false)
    const [time,setTime] = useState(props.time || 0)

    // Effect
    useEffect(() => {
        let interval = null
        if(running){
            interval = setInterval(() => {
                setTime(time + 1)
            },1000)
        }
        return () => clearInterval(interval)
    },[running,time])

    function checkTime(time) {
        // ตัวแปร
        const min_sec = 60
        // 60
        const hr_sec = 60 * min_sec
        // 3600
        const day_sec = 24 * hr_sec
        // 86400
        const day = Math.floor(time / day_sec)
        // time / 86400 
        const hour = Math.floor(time % day_sec / hr_sec)
        //(time % 86400) / 3600
        const minute = Math.floor(time % hr_sec / min_sec)
        //(time % 3600) / 60
        const second = time % min_sec
        // time % 60


        // test
        // return `${day.toString().padStart(2,'0')}d ${hour.toString().padStart(2,'0')}h ${minute.toString().padStart(2,'0')}m ${second.toString().padStart(2,'0')}s`

        // แสดงผล
        if(day > 0){
            return `${day}d ${hour}h ${minute}m ${second}s`
        }else if(hour > 0){
            return `${hour}h ${minute}m ${second}s`
        }else if(minute > 0){
            return `${minute}m ${second}s`
        }else{
            return `${second}s`
        }
    }

    return (
        <div className="timer">

            <h3>Timer</h3>

            <input className="input" type="text" readOnly={true} placeholder='000d 00h 00m 00s' value={checkTime(time)}/>

            <div className="buttons">
                <button className='btn btn-danger' onClick={() => {setrunning(false);setTime(0);} }>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={() => setrunning(!running)}>{running ? 'Pause' : 'Run'}</button>
            </div>

        </div>
    );
}

export default Timer;