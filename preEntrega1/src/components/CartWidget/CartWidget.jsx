import React, { useContext } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import Context from '../../context/CartContext';
import { Badge, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context);

  return (
    <ChakraLink as={Link} to='/cart' >
      <Box>
        <PiShoppingCartFill />
        <Badge>{getQuantity()}</Badge>
      </Box>
    </ChakraLink>
  )
}

export default CartWidget;