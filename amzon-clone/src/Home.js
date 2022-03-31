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
                    <Product title='Bellroy Standing Pouch (Zip Pouch, tech kit, Bag Organizer)' price={35.00} image='https://m.media-amazon.com/images/I/518vNWvJZDL._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                </div>
                <div className="home__row">
                <Product title='SKL Tech USB 3.0 SATA III Hard Drive Adapter Cable, ' price={11.99} image='https://m.media-amazon.com/images/I/61U9unxuDbS._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                <Product title='Language Translator Real-Time' price={100.00} image='https://m.media-amazon.com/images/I/614pm5RaKqL._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                <Product title='iFixit Pro Tech Toolkit - Electronics, Smartphone,' price={69.99} image='https://m.media-amazon.com/images/I/81OI517CJ1L._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                    
                </div>
                <div className="home__row">
                <Product title='200W USB C Wall Charger,' price={119.00} image='https://m.media-amazon.com/images/I/51TCWQ+u-dL._AC_UL640_FMwebp_QL65_.jpg' rating={5} />
                </div>
            </div>
        </div>
        
    )
}

export default Home
