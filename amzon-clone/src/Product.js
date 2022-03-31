import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className="product">
        <div className="product__info">
            <p>The Lean Startup</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
        </div>
        <div className="product__rating">
            <p>⭐️⭐️⭐️</p>
        </div>
        <img src="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UL640_FMwebp_QL65_.jpg" alt="" />
        <button>Add to basket</button>
    </div>
  )
}
