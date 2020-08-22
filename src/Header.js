import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SerachIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue  } from './StateProvider';
import { auth } from './Firebase';

function Header() {

    const [{ basket, user}] = useStateValue();
     console.log(basket);

     const login =() =>{
         if(user){
             auth.signOut();

         }
     }

    return (
        <nav className="header">
        {/* Logo on left -> img -> search box -> Singin limks -> Cart*/}
       <Link to="/">
        <img className="header_logo" 
        src="http://pngimg.com/uploads/ebay/ebay_PNG20.png"
        alt=""/>
        </Link>
        <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SerachIcon className="header_SearchIcon"/>
        </div>

        <div className="header_nav">
            <Link to="/login" className="header_link">
            <div onClick={login} className="header_option">
    <span className="head_option1">Hello {user}</span>
    <span className="head_option2">{user ? 'Sign Out' : 'Sign in'}</span>
            </div>
            </Link>
            <Link to="/" className="header_link">
            <div className="header_option">
                <span className="head_option1">Return</span>
                <span className="head_option2">& Orders</span>
            </div>
            </Link>
           

            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
    <span className="head_option2 header_basketCount">{basket.length}</span>
                </div>
              

            </Link>
        </div>
        </nav>
    )
}

export default Header
