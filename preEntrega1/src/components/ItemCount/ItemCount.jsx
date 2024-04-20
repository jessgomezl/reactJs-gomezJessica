import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {
    const [count,setCount] = useState(1)

    const stock = 5

  const incrementar = () => {
    count < stock && setCount(count + 1)
  }
  const decrementar = () => {
    count > 1 && setCount(count - 1)
  }

  return (
    <Box>
      <Button onClick={decrementar}>-</Button>
      <Heading>{count}</Heading>
      <Button onClick={incrementar}>+</Button>
    </Box>
  )
}

export default ItemCount