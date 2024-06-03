import React, { useContext, useState } from 'react'
import { Card, CardBody,Stack, Heading, Text, Image, Link as ChakraLink, Box, StylesProvider, Flex } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiSolidCartDownload } from "react-icons/bi";
import { MdShoppingBag } from "react-icons/md";
import styles from './ItemDetail.module.css';


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
  <Flex className={styles.containerItemDetail}>
    <Card >
    <Heading className={styles.detailCategoria}>{categoria}</Heading>
      <CardBody className={styles.containerCard}>
        <Image className={styles.cardImage}
          src={img}
          alt={nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading className={styles.detailNombre}>{nombre}</Heading>
          <Text className={styles.detailDescripcion}>
            {descripcion}
          </Text>
          <Text className={styles.detailPrecio}>
            ${precio}
          </Text>
          <Text className={styles.detailStock}>
            Stock:{stock}
          </Text>
          <Text className={styles.detailCantidad}>
            cantidad actual en el carrito: {currentQuantity}
          </Text>
        </Stack>
      </CardBody>
      {
        quantity > 0 ?
        <Box className={styles.containerQuantity}>
          <Box className={styles.containerDetailCarrito}>
            <ChakraLink className={styles.detailCarrito} as={Link} to='/cart'>Ir al carrito</ChakraLink>
            <BiSolidCartDownload className={styles.detailIcon}/>
          </Box>
          <Box className={styles.containerDetailSeguir}>
            <ChakraLink className={styles.detailSeguirComprando} as={Link} to='/'>Seguir comprando</ChakraLink>
            <MdShoppingBag className={styles.detailIcon}/>
          </Box>
        </Box>
        :
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable}/>
      }
    </Card>
  </Flex>
  )
}

export default ItemDetail