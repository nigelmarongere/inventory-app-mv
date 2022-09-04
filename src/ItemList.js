import React from "react";
import Item from "./components/Item";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="itemList">
      {props.data.map((item, index) => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}

export default ItemList;