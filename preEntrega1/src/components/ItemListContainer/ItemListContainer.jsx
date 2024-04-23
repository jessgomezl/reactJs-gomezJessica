import { Box, Flex, Grid, Heading, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading] = useState(true)
  const { categoryId } = useParams ()

  useEffect(() => {
    setLoading (true)
    const dataProductos = categoryId ? getProductsByCategory (categoryId) : getProducts()

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <Box>
      <Heading>{title}</Heading>
      {
        loading ?
        <BeatLoader color="#a336d6" />
        :
        <ItemList products = {products} />
      }
      
    </Box>
  )
};

export default ItemListContainer;