import { useState,useEffect } from "react";


export default function ProgressBar({timer}){
    const [remainingTime, setIsRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('interval');
          setIsRemainingTime(prevTime => prevTime - 50);
        }, 50);
    
        return () => {
          clearInterval(interval);
        }
      },[]);
      return <progress value={remainingTime} max={timer} />
}
