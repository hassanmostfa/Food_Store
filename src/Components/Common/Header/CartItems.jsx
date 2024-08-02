import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart , removeFromCart } from '../../../Redux/cartSlice'
import CheckoutForm from './CheckoutForm'
import "./Header.css"


const CartItems = ({id , title , cover , price , quantity , totalPrice}) => {
  const dispatch = useDispatch();

  return (
    <div className="cart_items">
      <div className="container">
        <div className="cart_content">

          <div className="row">
            
            <div className="img">
              <img src={cover} alt="cart" width={80} height={80} />
            </div>

            <div className="text">
              <p>unit price : {price}</p>
              <div className="item_qty">
                <span onClick={() => dispatch(addToCart({id, title, cover, price, quantity, totalPrice}))}><i className="fa fa-plus"></i></span>
                <span>{quantity}</span>
                <span onClick={() => dispatch(removeFromCart(id))}><i className="fa fa-minus"></i></span>
              </div>
            </div>

            <div className="price">
              <h4>{totalPrice}$</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems