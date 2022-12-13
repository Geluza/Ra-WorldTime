import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function Watch({itemOffset}) {
 let [timeZone, setTimeZone] = useState('');
 //const {itemOffset} = item;

function refreshClock() {
  setTimeZone(moment().utcOffset(itemOffset*60).format("HH:mm:ss"))
}
  useEffect(() => {
    const timer =  setInterval(refreshClock, 1000); 
    return () => {
      clearInterval(timer);
    };
});
    
  
  return(
    <div className="time">{timeZone}</div>
  )

  //utcOffset(timeOffset*60).format("HH:mm:ss")


}