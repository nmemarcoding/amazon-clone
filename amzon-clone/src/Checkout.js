import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'

export default function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__add" src="https://m.media-amazon.com/images/I/61B3QV3pFdL._SX3000_.jpg" alt=""></img>

            <div>
                <h2 className="checkout__title">
                    Your shopping bascket
                </h2>
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
            
        </div>    
    </div>
  )
}
