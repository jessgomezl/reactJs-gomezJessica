import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({products}) => {
  return (
    <Flex className={styles.itemList}>
      {products.map((elem) => (
      <Box key={elem.id}>
        <Item {...elem} />
      </Box>
      ))}
    </Flex>
  )
}

export default ItemList