import React from "react";
import './App.css'
import SearchBar from './Searchbar';
import Dashboarditems from './Dashboarditems';
import Featuredproducts from './Featuredproducts';
import Sidebar from "./Sidebar";


function Dashboard(){
    return (
        <div className='Body'>
          <div className='Main'>
            <SearchBar />
            <Dashboarditems />
            <Featuredproducts />
          </div>
          <div className="App">
            <Sidebar/>
          </div>
        </div>
    );
}


export default Dashboard