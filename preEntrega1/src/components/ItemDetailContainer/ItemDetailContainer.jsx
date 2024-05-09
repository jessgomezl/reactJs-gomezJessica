import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate ()

    useEffect(() => {
      getProductById(productId)
        .then((prod) =>{
          if(!prod) {
            navigate ('/*')
          }
          else {
            setProducto(prod)
          }
        })
        .catch((error) => console.log(error))
        .finally (() => setLoading(false))
    }, [productId])

  return (
    <>
      {
        loading ?
          <BeatLoader color="#a336d6" />
        :
          <ItemDetail {...producto}/>
      }
    </>
  )
}

export default ItemDetailContainer