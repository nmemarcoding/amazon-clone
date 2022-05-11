import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export default function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if (user){
            signOut(auth)
        }
        window.location.reload();
    }
    return (
        <div className="header">
           <Link to="/">
                <img src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png'
                className="header__logo" alt=""></img>
           </Link>
           <div className="header__search">
                <input className="header__searchInput" type="text"/>   
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option">
                        <span className="heade__optionLineOne">Hello {!user ? "guest" : user.email}</span>
                        <span className="heade__optionLineTwo" onClick = {handleAuthentication}>{user?'Sign Out' : 'Sing In'}</span>
                    </div>
                </Link>    
                <div className="header__option">
                    <span className="heade__optionLineOne">Return</span>
                    <span className="heade__optionLineTwo">& Order</span>
                </div>  
                <div className="header__option">
                    <span className="heade__optionLineOne">Your</span>
                    <span className="heade__optionLineTwo">Prime</span>
                </div>  

                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <ShoppingBasketIcon className="ShoppingBasketIcon"/>    
                    </Link>
                    <span className="heade__optionLineTwo Header__basketCount">{basket?.length}</span>
                </div>
                 
            </div>
        </div>
    )
}
