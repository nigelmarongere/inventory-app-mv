import React from "react";
import Featuredproducts from "./Featuredproducts";
import "./App.css";

function ItemList(props) {
  return (
    <div className="itemList">
      {props.data.map((featuredproduct, index) => (
        <Featuredproducts key={featuredproduct.title} {...featuredproduct} />
      ))}
    </div>
  );
}

export default ItemList;