import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {PropagateLoader} from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import { Box } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const { currentQuantity } = useContext(Context);

    const navigate = useNavigate ()
    useEffect(() => {
      const getProduct = async() => {

        const queryRef = doc(db, 'productos', productId) 
        const response = await getDoc(queryRef)
        const newItem = {
          ...response.data(),
          id: response.id
        }
        setProducto(newItem)
        setLoading(false)
      }

      getProduct()
    }, [productId])

  return (
    <>
      {
        loading ?
          <PropagateLoader color="#b322ca" />
        :
        <Box >
          <ItemDetail {...producto} currentQuantity={currentQuantity(productId)}/>
        </Box>
      }
    </>
  )
}

export default ItemDetailContainer