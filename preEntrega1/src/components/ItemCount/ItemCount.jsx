import { Button, Flex, Heading } from '@chakra-ui/react'
import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({ stock, initialValue, onAdd}) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <Flex>
      <Button onClick={decrementar}>-</Button>
      <Heading>{count}</Heading>
      <Button onClick={incrementar}>+</Button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount