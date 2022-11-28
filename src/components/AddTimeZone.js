import React, {useState} from 'react';


function AddForm ({addTimeZone}) {
  let [name, setName] = useState('');
  let [timeOffset, setTimeOffset] = useState('')
 
  const changeName = (evt) => {
    setName(evt.target.value);
  }
 
  const changeTimeZone = (evt) => {
    setTimeOffset(evt.target.value);
  }


  const handleSubmit = evt => {
    evt.preventDefault();
    addTimeZone(name, timeOffset);
    setName('');
    setTimeOffset('');
  }


  return (
    <form className="add_timeZone" onSubmit={handleSubmit}>
      <label className="add_name">Название</label>
      <input className="add_name_field" value={name} onChange={changeName}></input>
      <label className="add_timeZone">Смещение относительно UTC</label>
      <input className="add_timeZone" type="number" min="-12" max ="14" value={timeOffset} onChange={changeTimeZone}>
      </input>
      <button className="add_btn">Добавить</button>  
    </form>
  );
}

export default AddForm;