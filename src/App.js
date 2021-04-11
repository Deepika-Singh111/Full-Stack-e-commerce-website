import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IFstpD2mUAqE3XtJnz118lavZacaRKVvD5ltkCMT5WzOtsxkqT9MBKS8waJLAGhi0rY6oilujEZ8HSzBmFVMMHa00Tso2pao0"
  );


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
          </Route>
          <Route path='/'>
             <Header />
             <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
