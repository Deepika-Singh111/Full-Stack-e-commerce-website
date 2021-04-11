import React from 'react'
import './Orders.css'
import { Link } from 'react-router-dom';

function Orders() {

    return (
        <div className='orders'>
            <h3>Your order has been placed.</h3>
            <Link to='/' className='orders_button'>
                <button>Back to home</button>
            </Link>
            
        </div>
    )
}

export default Orders
