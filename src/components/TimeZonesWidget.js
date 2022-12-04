import TimeZoneItem from './TimeZoneItem';
import AddTimeZone from './AddTimeZone';
import { useState } from 'react';
import moment from 'moment';

function TimeZonesWidget() {
    let [items, setItems] = useState([]);

    const addTimeZone = (name, timeOffset) => {
        let findIndex = items.findIndex(itm => itm.itemId === name)
        if(findIndex >= 0) {
           alert("Часы с таким названием уже существуют!")
        }
          else if(!name) {
            alert("Заполните поле Название")
          } else {
          items.push({
            itemId: name,
            itemName: name,
            itemTime: moment().utcOffset(timeOffset*60).format("HH:mm:ss"),
            itemOffset: timeOffset
          })
          setItems([...items])
          }  
       }
       
       function deleteItem(itemId) {
        const filter = items.filter((el) => el.itemId !== itemId);
        setItems([...filter]);  
       }

     return (
        <div className="widget">
    <AddTimeZone addTimeZone={addTimeZone}></AddTimeZone>
    <div className="timeZones_list">
     {items.map((item)=> {
     return <TimeZoneItem key={item.itemId} item={item} deleteItem={deleteItem}></TimeZoneItem>
     })
      }
    </div>
      </div>
    );


}

export default TimeZonesWidget;