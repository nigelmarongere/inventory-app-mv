import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './Searchbar';
import Dashboarditems from './Dashboard';
import Featuredproducts from './Featuredproducts';
import ItemList from "./Itemrender";
import Itemspage from "./Itemspage";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


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
    <Router>
    <div className='Body'>
      <div className='Main'>
        <SearchBar />
         
      
        
        
  
     <Dashboarditems />
        <Featuredproducts />
      </div>
      <div className="App">
        <nav>
          <ul>
            <h1>Inventory</h1>
            <li>
              <a  href='#'>Dashboard</a>
            </li>
            <li>
              <Link to="/itemspage">Items</Link>
              <Itemspage/>
            </li>
          </ul>
        </nav>
      </div>
    </div>

      <Routes>
        
      </Routes>
    </Router>
  );
};

export default App;
