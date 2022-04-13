import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js'
import CheckoutProduckt from './CheckoutProduckt.js'

export default function Checkout() {
    const [{basket,user},dispatch] = useStateValue();


  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__add" src="https://m.media-amazon.com/images/I/61B3QV3pFdL._SX3000_.jpg" alt=""></img>

            <div>
                <h4>{user? `Hello, ${user.email}` : 'Hello Guest'}</h4>
                <h2 className="checkout__title">
                    Your shopping bascket
                </h2>
                {basket.map(item=>(
                    <CheckoutProduckt
                        id ={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
            
        </div>    
    </div>
  )
}
