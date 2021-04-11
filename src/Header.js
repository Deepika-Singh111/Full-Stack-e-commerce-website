import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className="header">
            <Link to='/'>
                 <img 
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'} className="header_link">
                    <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header_optionalLineTwo'>{user ? 
                        'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/' className="header_link">
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionalLineTwo'>
                            & Orders </span>
                    </div>
                </Link>
                <Link to='/' className="header_link">
                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionalLineTwo'>
                            Prime</span>                    
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
