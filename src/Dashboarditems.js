import React from 'react'
import './App.css';
import Item from './seedData.js'

function Dashboarditems(){

    const total = Item.map(item => {
                        
        return (
            <p>{item.title}</p>
        )
    })
   


    return (

        <div className='Dashboard'>
            <div className='Totalitems'>
                <p>TotalItems</p>
                <p>20</p>
            </div>
            <div className='Categories'>
                <p>Categories</p>
                     <p>4</p>   
            </div>
        </div>
    );
}

export default Dashboarditems