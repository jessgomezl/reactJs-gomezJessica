import React, { useContext } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import Context from '../../context/CartContext';
import { Badge, Flex, Link as ChakraLink, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './CartWidget.module.css';

const CartWidget = () => {
  const { getQuantity } = useContext(Context);

  return (
    <ChakraLink as={Link} to='/cart' >
      <Flex className={styles.containerCartwidget}>
        <PiShoppingCartFill className={styles.CartWidget}/>
        <Badge className={styles.Badge} variant='solid' >{getQuantity()}</Badge>
      </Flex>
    </ChakraLink>
  )
}

export default CartWidget;