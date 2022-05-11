import "./App.css"
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Payment from './Payment.js'
import Orders from './Orders.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Login from "./Login";
import {loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KsreVFGcgTiMJ4LFwKXn09KqzoDpRAkDqVrITGfwv3he0kzKjcam1RzS8yh9meIi5q840CBxTGP3DucQRh2YcUm00mKnBF1sl"
);

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS', authUser.email)
      if (authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
          
      
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/Checkout" element={<><Header/><Checkout/></>}/>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route path="/orders" element={<><Header/><Orders/></>}/>
          <Route path="*" element={<><Header/><Home/></>}/>     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
