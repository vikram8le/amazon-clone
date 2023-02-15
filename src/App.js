import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';

import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import {loadStripe} from '@stripe/stripe-js';
import{Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51LARd7SCu2Fn8Mo6LLbQ1GpjkRP0Y6XJSYtBpgzsaCgBuxhhgyVuELCG178lnO4wufCg5iAla0aqeqIVovlV4JDP00gR2kRTvE');

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
   <Router>
      <div className="app">
          <Routes>
              
              <Route path='/' element = {<> <Header /> <Home /> </>} />
              
              <Route path= '/home' element = { <>  <Header /> <Home /> </>} />

              <Route path= '/login' element = {<> <Login /> </>} />

              <Route path='/checkout' element = { <> <Header /> <Checkout /> </>} />

            
 
              <Route path="*" element = {<div> 404 Page not found</div>} />
              
            </Routes>
      </div>
   </Router>
  );
}

export default App;
