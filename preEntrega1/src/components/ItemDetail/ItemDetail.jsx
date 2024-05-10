
import React, { useContext, useState } from 'react'
import { Card, CardBody,Stack, Heading, Text, Image, Link as ChakraLink } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

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
  }

  return (
    <>
    <Card >
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
        </Stack>
      </CardBody>
      {
        quantity > 0 ?
        <ChakraLink as={Link} to='/cart'>Ir al carrito</ChakraLink>
      :
        <ItemCount stock={5} initialValue={1} onAdd={onAdd}/>
      }
    </Card>
  </>
  )
}

export default ItemDetail