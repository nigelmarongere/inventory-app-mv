import React from "react";

function Item(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Item;