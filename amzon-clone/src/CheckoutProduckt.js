import React from 'react'
import './checkoutProduckt.css'

export default function checkoutProduckt({id,image,title,price,rating}) {
    return (
        <div className="checkoutProduckt">
            <img src={image} alt="" className="checkoutProduckt__image"/>
            <div className="checkoutProduckt__info">
                <p className="checkoutProduckt__title">{title}</p>
                <p className="checkoutProduckt__price">
                    <small>$</small> 
                    <strong>{price}</strong>   
                </p> 
                <div className="checkoutProduckt__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐️</p>))}    
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}
