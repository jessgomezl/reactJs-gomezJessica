
import React, { useContext, useState } from 'react'
import { Card, CardBody,Stack, Heading, Text, Image, Link as ChakraLink } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const ItemDetail = ({nombre, precio, stock, img, id, descripcion, categoria}) => {
  const [ quantity, setQuantity ] = useState(0)
  const { addItem } = useContext (Context)

  const onAdd = (quantity) =>{

    const item ={
      id,
      nombre,
      precio,
      descripcion,
      stock,
      categoria
    }
    setQuantity(quantity)
    addItem(item, quantity)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${quantity} unidades`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <>
    <Card >
    <Heading size='md'>{categoria}</Heading>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='blue.600' fontSize='2xl'>
              {descripcion}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
        </Stack>
      </CardBody>
      {
        quantity > 0 ?
        <ChakraLink as={Link} to='/cart'>Ir al carrito</ChakraLink>
      :
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd}/>
      }
    </Card>
  </>
  )
}

export default ItemDetail