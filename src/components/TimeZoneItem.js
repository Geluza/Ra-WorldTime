//import React,{useState, useEffect} from 'react';
//import moment from 'moment-timezone';

function TimeZoneItem({item}) {

return (
  <li className="list_item_timeZone" >
  <div className="name_timeZone">{item.itemName}</div>
  <div className="time">
  {item.itemTime}
  </div>
 <button className="item_delete_timeZone">x</button>
  </li>
)
}

export default TimeZoneItem;


//<span className="item_hour">{item.itemHour}:</span> 
 // <span className="item_min">{item.itemMin}:</span>
 // <span className="item_sec">{item.itemSec}</span>