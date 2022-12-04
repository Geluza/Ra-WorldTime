import Watch from "./Watch";

export default function TimeZoneItem({item, deleteItem, timeOffset}) {
   const {itemName, itemId, itemTime} = item;
  
   const handleDelete = (event) => {
     deleteItem(event.target.id);
   }

    return (
        <div className="list_item_timeZone">
            <div className="name_timeZone">{itemName}</div>
            <Watch itemTime={itemTime} />
            <button className="item_delete_timeZone" type='button' id={itemId} onClick={handleDelete}>X</button>
        </div>
    );
}