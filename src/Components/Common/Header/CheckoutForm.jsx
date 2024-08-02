import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../Redux/cartSlice';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutForm = ({total ,handlePaymentSuccess}) => {

  const dispatch = useDispatch();

  const handleToken = (token) => {
    console.log(/*=====================================*/);
    console.log(token);
    handlePaymentSuccess();
    dispatch(clearCart(token));
    console.log(/*=====================================*/);
  }
  return (
    <div className="checkout_form">
      <div className="container">
        <StripeCheckout
        token={handleToken}
        stripeKey='pk_test_51PjMIX2N6MLx4zrCjOA5kA5RFJpku8Mcukhkoef4jqPGSjECVtsyyiXiQr4LzkmmYLV4fdQAAqyCRDes58cf3SDM003Q8tGnZc'
        amount={total * 100}
        name="Food Store"
        email="hassan.elshiat@gmail.com"
        description={`Your total is $${total}`}
        currency="USD"
        >
        <button className="pay_btn">Pay ${total}</button>
        </StripeCheckout> 
      </div>
    </div>
  )
}

export default CheckoutForm