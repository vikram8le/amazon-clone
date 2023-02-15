import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='payment_container'>

            <h1> 
                Checkout (
                    <Link to='/checkout'> {basket?.length} items</Link>
                )

            </h1>



            {/* Delivery Address  */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>308, Negra Arroyo Lane </p>
                    <p>Albuquerque, New Mexico </p>
                    <p>USA</p>
                </div>
            </div>

            {/* Review Order  */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items</h3>
                </div>

                <div className='payment_items'>
                    {/* Products */}
                    {basket.map( item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image ={item.image}
                        rating = {item.rating}
                        price = {item.price}
                        />
                    ))}
                </div>
            </div>
            {/* Payment Section  */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div> 

                <div className='payment_details'>
                    {/* STRIPE  */}
                </div>
            </div>    
        </div>
  )
}

export default Payment

