import { Box, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const { categoryId } = useParams ()

  useEffect(() => {

    const dataProductos = categoryId ? getProductsByCategory (categoryId) : getProducts()

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
  }, [categoryId])

  return (
    <Box>
      <Heading>{title}</Heading>
      <ItemList products = {products} />
    </Box>
  )
};

export default ItemListContainer;