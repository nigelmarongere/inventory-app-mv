import React, { useEffect, useState } from "react";
import './App.css';
// import SearchBar from './Searchbar';
// import Dashboarditems from './Dashboarditems';
// import Featuredproducts from './Featuredproducts';
// import Itemspage from "./Itemspage";
// import Sidebar from "./Sidebar";
// import ItemList from "./components/ItemList" 
import Dashboard from "./Dashboard";
import Modal from "./Modals";



function App() {
  const [ items, setItems ] = useState([]);
 

  useEffect(() => {
    async function fetchItems() {
      const resp = await fetch("http://localhost:3000/items");
      const data = await resp.json();
      setItems(data);
    }
    fetchItems();
  })

  return (
    <div >
      <Dashboard/>
      <Modal/>
    </div>
  );
};



export default App;
