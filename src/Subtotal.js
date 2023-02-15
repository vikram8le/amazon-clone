import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import {useNavigate} from 'react-router-dom'
import './Subtotal.css'


function Subtotal() {
    const navigate = useNavigate();
    const [ { basket } , dispatch] = useStateValue();

   /* const checkoutButton = document.getElementById("checkoutButton");
    if(basket?.length === 0){
        checkoutButton.innerText = "Add some items first"
        
        checkoutButton.onclick
            document.location.href="/home";
        }
    }
    else {null}

     */   
        
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
            <>
                <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p>

                <small className='subtotal_gift'>
                    <input type="checkbox" /> This order contains a gift 🎁
                </small>

            </>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

        />

        <button id="checkoutButton" onClick={e => navigate('/payment')}> {basket?.length>0 ? 'Proceed to checkout' : 'Add some items first'} </button>

    </div>

    
  );
  
}

export default Subtotal;