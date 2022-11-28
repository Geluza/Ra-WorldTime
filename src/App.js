import React, {useState, useEffect} from 'react';
import './App.css';
import AddForm from './components/AddTimeZone'
import TimeZoneItem from './components/TimeZoneItem'
import moment from 'moment-timezone';



function App() {
  let [items, setItems] = useState([]);
  let [timeLocal, setTimeLocal] = useState('');

    // const localTimeZone = (timeOffset) => {
   //setTimeLocal(timeLocal = moment().utcOffset(timeOffset).format("HH:mm:ss"));
   // return timeLocal;
   //  }

    

  let newItem;

  //функция для добавления таймера на страницу
 const addTimeZone = (name, timeOffset) => {
  setTimeLocal(timeLocal = moment().utcOffset(timeOffset).format("HH:mm:ss"));
    if(!name) {
      alert("Заполните поле Название")
    } else {
    newItem = {
      itemId: name,
      itemName: name,
      itemTime: timeLocal
    }
    let newItems = [...items, newItem];
    setItems(newItems)
    }  
 }
  
 useEffect(() => {
  let timer = setInterval(() => setTimeLocal(timeLocal, 1000))
   return () => {
  clearInterval(timer);
 };
});  

  return (
    <main className="App">
    <AddForm addTimeZone={addTimeZone}/>
    <ul className="timeZones_list">
    {items.map(item => {
    return(
   <TimeZoneItem key = {item.itemId} item={item}>
   </TimeZoneItem>
  )
  })
  }
   </ul>
    </main>
  );



}

export default App;


