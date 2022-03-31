import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

export default function Header() {
    return (
        <div className="header">
           <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
           className="header__logo" alt=""></img>
           <div className="header__search">
                <input className="header__searchInput" type="text"/>   
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="heade__optionLineOne">Hello Guest</span>
                    <span className="heade__optionLineTwo">Sign in</span>
                </div>    
                <div className="header__option">
                    <span className="heade__optionLineOne">Return</span>
                    <span className="heade__optionLineTwo">& Order</span>
                </div>  
                <div className="header__option">
                    <span className="heade__optionLineOne">Your</span>
                    <span className="heade__optionLineTwo">Prime</span>
                </div>  

                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>    
                    <span className="heade__optionLineTwo Header__basketCount">0</span>
                </div>
                 
            </div>
        </div>
    )
}
