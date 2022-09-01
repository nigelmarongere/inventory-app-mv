import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import './App.css';

function App() {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const resp = await fetch("http://localhost:3050/items");
      const data = await resp.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Inventory app might go here</h1>
      <ItemList data={items} />
    </div>
  );
}

export default App;
