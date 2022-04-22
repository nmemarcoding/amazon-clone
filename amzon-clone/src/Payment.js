import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduckt from './CheckoutProduckt';
import "./Payment.css"
import { useStateValue } from './StateProvider';

export default function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    
  return (
    <div className="payment">
        <div className="payment__container">
            <h1>
                Checkout(<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Dilevery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles,CA</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="paument__title">
                        <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
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
            <div className="payment__section">
                <div className="paument__title">
                            <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                     
                </div>
            </div>
        </div>
    </div>
  )
}
