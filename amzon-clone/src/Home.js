import React from 'react'
import'./Home.css'
import Product from "./Product.js"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__Image" src="https://m.media-amazon.com/images/I/611w8CPT7GL._SX3000_.jpg" alt="" />
                
                <div className="home__row">
                    <Product title='The Lean Startup' price={29.99} image='https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                    
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
        
    )
}

export default Home
