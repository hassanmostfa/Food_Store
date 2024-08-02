import React from 'react'
import CartItems from './CartItems'
import CheckoutForm from './CheckoutForm'
import { useSelector } from 'react-redux';
const DrawerList = () => {

      // Cart items and total quantity
    const cartItems = useSelector((state) => state?.cart?.itemList);

    //Total price
    let total = 0 ;
    cartItems.forEach((item) => {total += item.totalPrice})

    const handlePaymentSuccess = () => {
        alert("Payment Successfull")
    }
    return (
        <div className="drawer_list">
            <div className="container">
                <div className="cart_items">
                    {
                        cartItems.map((item) => <CartItems key={item.id} 
                        id={item.id} title={item.title} cover={item.cover} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice}/>)
                    }
                </div>
                <div>
                    <CheckoutForm total={total} handlePaymentSuccess={handlePaymentSuccess}/>
                </div>
            </div>

        </div>
    )
}

export default DrawerList