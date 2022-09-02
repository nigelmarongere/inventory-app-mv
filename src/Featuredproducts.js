import React from 'react'
import './App.css';
import Featureditems from './FeaturedItemList.js'


function Featuredproducts(){
    return(
        <div className = 'Featuredproducts'>
            <div>
                <h2>Featured Products</h2>
                <div className='Features'>
                {
                    Featureditems.map( item => {
                        return(
                                <div className='Featureitems'>
                                    <img src= {item.image} alt='' />
                                    <p className='Itemtittle'>{item.title} </p>
                                    <p>£{item.price} </p>
                                    <p>see more...</p>
                                </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    )
}

export default Featuredproducts