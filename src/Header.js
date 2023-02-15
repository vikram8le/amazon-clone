import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function Header() {
     const [ { basket, user } , dispatch] = useStateValue();
     const handleAuthentication = () => {
          if(user){
               auth.signOut();
          }
     }

  return (
    <div className = "header">
          <Link to="/home">
               <img class="header_logo" src= "https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt= "" />
          </Link>
       

       <div className='header_search'>
           <input className='header_searchInput' type= "text" />
           <img class="search_logo" src= "https://cdn-icons-png.flaticon.com/512/149/149852.png" alt= "" />
       </div>

       <div className='header_nav'>
           <Link to={!user && '/login'}>
               <div className='header_option' onClick={handleAuthentication}>
                    <span className='header_option_lineOne'>Hello {!user ? 'Guest' : user.uid}</span>
                    <span className='header_option_lineTwo'>{ user ? 'Sign Out' : 'Sign In'}</span>
               </div>
           </Link>

           <div className='header_option'>
                <span className='header_option_lineOne'>Returns</span>
                <span className='header_option_lineTwo'>& Orders</span>
           </div>

           <div className='header_option'>
                <span className='header_option_lineOne'>Your</span>
                <span className='header_option_lineTwo'>Prime</span>
           </div>

        <div className='header_optionCart'>
                <Link to ="/checkout">
                    <img class= "cart_logo" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt= ""/>
                </Link>
                <strong className='header_optionLineTwo header_basketCount'>
                     {basket?.length}
                </strong>
                
        </div>


       </div>

    </div>
  )
}

export default Header