import "./App.css"
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Login from "./Login";


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
          <Route path="*" element={<Header/>}/>     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
