import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduckt from './CheckoutProduckt';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import {CardElement, useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Divider } from '@material-ui/core';
import axios from './axios';

export default function Payment() {
    const[{basket,user},dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [seccueded,setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    
        
    },[basket])

    console.log(`The sicret is >>>>> `,clientSecret)
    const handleSubmit = async(event)=>{
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })
            navigate.replace('/orders')
        })
    }
    
    const handleChange = e=>{
        setDisabled(e.empty);
        setError(e.error ? e.error : "");
    }
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText ={(value)=>(
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator = {true}
                                    prefix={"$"}
                                    />
                            </div>
                            <button disabled={processing || disabled || seccueded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                        </form>
                        {error && <div>{error}</div>}
                     
                </div>
            </div>
        </div>
    </div>
  )
}
