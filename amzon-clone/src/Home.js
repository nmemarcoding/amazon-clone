import React from 'react'
import'./Home.css'
import Product from "./Product.js"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__Image" src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product/>
            </div>
            <div className="home__row">
                
            </div>
            <div className="home__row">
                
            </div>
        </div>
        
    )
}

export default Home
