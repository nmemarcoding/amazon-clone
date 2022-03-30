import React from 'react'
import './Header.css'


export default function Header() {
    return (
        <div className="header">
           <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
           className="header__logo" alt=""></img>
           <div className="header__search">
                <input className="header__searchInput" type="text"/>   
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="heade__optionLineOne">Hello Guest</span>
                    <span className="heade__optionLineOne">Sign in</span>
                </div>    
                <div className="header__option">
                    <span className="heade__optionLineOne">Return</span>
                    <span className="heade__optionLineOne">& Order</span>
                </div>  
                <div className="header__option">
                    <span className="heade__optionLineOne">Your</span>
                    <span className="heade__optionLineOne">Prime</span>
                </div>  
                 
            </div>
        </div>
    )
}
