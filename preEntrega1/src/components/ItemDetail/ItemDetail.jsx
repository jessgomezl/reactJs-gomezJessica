
import React, { useContext, useState } from 'react'
import { Card, CardBody,Stack, Heading, Text, Image, Link as ChakraLink, Box } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiSolidCartDownload } from "react-icons/bi";
import { MdShoppingBag } from "react-icons/md";


const ItemDetail = ({nombre, precio, stock, img, id, descripcion, categoria, currentQuantity}) => {
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

  const maxAvailable = stock - currentQuantity; 

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
            <Text color="#c86f43" fontSize="xl" w={'95%'}  >
              Stock:{stock}
            </Text>
            <Text>
              cantidad actual en el carrito: {currentQuantity}
            </Text>
        </Stack>
      </CardBody>
      {
        quantity > 0 ?
        <Box>
          <ChakraLink as={Link} to='/cart'>Ir al carrito</ChakraLink>
          <Box>
            <BiSolidCartDownload />
          </Box>
          <ChakraLink as={Link} to='/'>Seguir comprando</ChakraLink>
          <Box>
            <MdShoppingBag />
          </Box>
        </Box>
        :
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable}/>
      }
    </Card>
  </>
  )
}

export default ItemDetail