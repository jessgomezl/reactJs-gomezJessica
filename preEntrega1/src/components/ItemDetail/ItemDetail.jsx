
import React, { useContext } from 'react'
import { Card, CardBody, CardFooter,Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, precio, stock, img, id, descripcion, categoria}) => {

    const { addItem } = useContext (Context)

    const onAdd = (quantity) =>{

      const item ={
        id,
        nombre,
        precio,
        stock
      }
      addItem(item, quantity)
    }

  return (
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
          <Divider />
      <CardFooter>
      <ButtonGroup spacing='2'>
      </ButtonGroup>
      <ItemCount stock={5} initialValue={1} onAdd={onAdd}/>
      <Link to='/cart'>Ir a carrito</Link>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail