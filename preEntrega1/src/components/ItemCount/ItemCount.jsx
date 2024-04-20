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
    <div>
      <Button onClick={decrementar}>-</Button>
      <Heading>{count}</Heading>
      <Button onClick={incrementar}>+</Button>
    </div>
  )
}

export default ItemCount