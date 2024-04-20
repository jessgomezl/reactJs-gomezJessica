import React, { useState } from 'react'
import { useEffect } from 'react';
import { getProducts } from "../../data/asyncMock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts ()
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Box>
      <Heading>{title}</Heading>
      <ItemList products = {products} />
    </Box>
  )
};

export default ItemListContainer;