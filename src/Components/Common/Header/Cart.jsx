import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux';

import DrawerList from './DrawerList';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const Cart = () => {

  /***************************************************************************/
  // Cart items and total quantity
  const cartItems = useSelector((state) => state?.cart?.itemList);
  const totalQuantity = useSelector((state) => state?.cart?.totalQuantity);
  /***************************************************************************/

  // Drawer//
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
/***************************************************************************/
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
      <div className="cart">
        <span>{totalQuantity}</span>
          <i className="fa fa-shopping-cart"></i>
        </div> 
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="cart_contents">
          <div className="cart_header">
            <h2>Shopping Cart</h2>
            <Button onClick={toggleDrawer(false)}><i className="fa fa-times"></i></Button>
          </div>
          <DrawerList />
        </div>
      </Drawer>
    </div>
  )
}

export default Cart