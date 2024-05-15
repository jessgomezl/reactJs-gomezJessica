import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading] = useState(true)
  const { categoryId } = useParams ()

  useEffect(() => {
    setLoading (true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ? 
      coleccion 
      : 
      query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)

    }
    getData()
  }, [categoryId])

  return (
    <Box>
      {
        loading ?
        <PropagateLoader color="#c936d6" />
        :
        <ItemList products = {products} />
      }
    </Box>
  )
}

export default ItemListContainer;