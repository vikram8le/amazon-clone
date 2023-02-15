import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout_ad' 
                src= { require ("/Users/vikram/Documents/Amazon Clone/amazon-clone/src/Assets/checkout_ad_image.jpg")} 
                alt="" 
            />

            <div className='checkout_title'>
                <h3>Hello,  {user?.email}</h3>
                <h2> {basket?.length>0 ? 'Your shopping basket' : 'Your shopping basket is empty'}</h2>

                {basket.map( item => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image ={item.image}
                        rating = {item.rating}
                        price = {item.price}
                    />
                )

                )}

            </div>
        </div>

        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout