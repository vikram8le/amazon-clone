import React from 'react'
import './Home.css'
import Product from './Product'

function home() {
  return (
    <div className='home'>
        <div className='home_container'>
            
            <img 
                className='home_image'
                src= {require("/Users/vikram/Documents/Amazon Clone/amazon-clone/src/Assets/home_image_1.jpeg")} alt="Deals"
            />
           
            <div className='home_row'>
                <Product 
                title= "iPhone 13 Mini "
                price={699}
                image= "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.slideshow-medium_2x.jpg"
                rating= {4} 
                 />
                
                <Product 
                title= "Apple 20W USB-C Power Adapter "
                price={29.99}
                image= "https://images-eu.ssl-images-amazon.com/images/I/61vtLhO6fDL._AC_UL320_SR320,320_.jpg"
                rating= {3} 
                 />

                <Product 
                title= "Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage)"
                price={1299.99}
                image= "https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
                rating= {4} 
                 />
                
               
                
           </div>

            <div className='home_row'>
                <Product 
                title= "Philips HL7756/00 Mixer Grinder, 750W, 3 Jars (Black)"
                price={75}
                image= "https://m.media-amazon.com/images/I/51B0MPbLbXL._SL1000_.jpg"
                rating= {3} 
                 />

                <Product 
                title= "Philips HD6975/00 25 Litre Digital Oven Toaster Grill, Grey, 25 liter"
                price={99.99}
                image= "https://m.media-amazon.com/images/I/618O0ywM1SL._SL1000_.jpg"
                rating= {4} 
                 />

            </div>

             <div className='home_row'>
             <Product 
                title= "LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor"
                price={399.99}
                image= "https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
                rating= {4} 
                 />
             </div>

        </div>
        
    </div>
  )
}

export default home