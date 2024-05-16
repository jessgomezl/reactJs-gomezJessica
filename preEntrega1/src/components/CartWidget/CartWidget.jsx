import React, { useContext } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import Context from '../../context/CartContext';
import { Badge, Box, Link } from '@chakra-ui/react';
import styles from './CartWidget.module.scss'

const CartWidget = () => {
  const { getQuantity } =useContext(Context)

  return (
    <Link className={styles.carrito}  to='/cart'>
      <Box className={styles.contCart} >
        <PiShoppingCartFill className={styles.icon} />
        <Badge className={styles.contador} >{getQuantity()}</Badge>
      </Box>
    </Link>
  )
}

export default CartWidget