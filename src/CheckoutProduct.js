import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({ id, image, title, rating, price}) {

    const [{basket}, dispatch] = useStateValue();

    const  removeFromBasket =() => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            title: title,
            image: image,
            rating: rating,
            price: price
        })

    }

  return (
    <div className='checkoutProduct'>
        
        <img 
            className='checkoutProduct_image' src= {image} alt=''
        />
        
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating).fill().map((_,i) =>(
                    <p>⭐</p>
                ))}
                
                
            </div>

            <button className='button_remove_from_basket' onClick={removeFromBasket}> Remove from Basket </button>
            
        </div>

        

        

    </div>
  )
}

export default CheckoutProduct