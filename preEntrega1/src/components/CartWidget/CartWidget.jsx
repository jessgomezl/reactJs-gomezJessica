import React, { useContext } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import Context from '../../context/CartContext';
import { Badge } from '@chakra-ui/react';

const CartWidget = () => {
  const { getQuantity } =useContext(Context)

  return (
    <div>
        <PiShoppingCartFill />
        <Badge>{getQuantity()}</Badge>
    </div>
  )
}

export default CartWidget