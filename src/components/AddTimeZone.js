import React from 'react';
import TimeZoneClass from './TimeZonesClass'

class TimeZone extends React.Component{

render() {
  const {name, timeZone} = this.state;
  return (
    <div className="add_fields">
      <label className="add_name">Название</label>
      <input className="add_name_field" value={name}></input>
      <label className="add_timeZone">Временная зона</label>
      <select className="add_timeZone" value={timeZone}>
      <option value="UTC-4">New York(UTC-4)</option>
      <option value="UTC+3">Moscow(UTC+3)</option>
      <option value="UTC+0">London(UTC+0)</option>
      <option value="UTC+9">Tokyo(UTC+9)</option>
      </select>
      <button className="add_btn">Добавить</button>  
    </div>
  );
}

}

export default TimeZone;
