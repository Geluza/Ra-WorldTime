import React, {useState, useEffect} from 'react';
import './App.css';
import AddForm from './components/AddTimeZone'
import TimeZoneItem from './components/TimeZoneItem'
import moment from 'moment-timezone';



function App() {
  let [items, setItems] = useState([]);
  let [timeLocal, setTimeLocal] = useState('');

 const localTimeZone = () => {
  setTimeLocal(moment())
 }

useEffect(() => {
  const timerId = setInterval(localTimeZone, 1000);
  return function cleanup() {
    clearInterval(timerId);
  };
},[] );

  let newItem;

  //функция для добавления таймера на страницу
 const addTimeZone = (name, timeOffset) => {
  let findIndex = items.findIndex(itm => itm.itemId === name)
  if(findIndex >= 0) {
     alert("Часы с таким названием уже существуют!")
  }
    else if(!name) {
      alert("Заполните поле Название")
    } else {
    newItem = {
      itemId: name,
      itemName: name,
      itemTime: timeLocal.utcOffset(timeOffset*60).format("HH:mm:ss")
    }
    let newItems = [...items, newItem];
    setItems(newItems)
    }  
 }


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


