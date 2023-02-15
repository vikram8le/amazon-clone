import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
    
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },

        });
    };

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i) =>(
                    <p>⭐</p>
                ))}
                
                
            </div>
        </div>

        <img 
            className='product_image' src= {image} alt=''
        />

        <button className='button_add_to_cart' onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product