import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function Watch({itemOffset}) {
 let [timeZone, setTimeZone] = useState(itemOffset);

  useEffect(() => {
    const timer = setInterval(()=> {
      const newDate = moment().utcOffset(timeZone*60).format("HH:mm:ss");
      setTimeZone(newDate);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
});
    
  
  return(
    <div className="time">{timeZone}</div>
  )

  //utcOffset(timeOffset*60).format("HH:mm:ss")


}