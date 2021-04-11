import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad" src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg' 
                    alt="" 
                />

                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout_title">Your Shopping Basket</h2>
                        
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
