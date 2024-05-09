import React, { useContext } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } =useContext(Context)

  return (
    <div>
        <PiShoppingCartFill />
    </div>
  )
}

export default CartWidget