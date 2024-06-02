import React from 'react';
import { Card, CardBody, CardFooter,Stack, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({nombre, precio, img, id}) => {
  return (
    <Card className={styles.card}>
        <CardBody >
            <Image className={styles.imagen}
                src={img}
                alt={nombre}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Text className={styles.nombre}>
                {nombre}
                </Text>
            <Text className={styles.precio}>
                ${precio}
            </Text>
            </Stack>
            </CardBody>
            <Divider />
        <CardFooter>
        <ButtonGroup spacing='2'>
            <Button variant="outline" color="#C92C8D" >
                <Link to={`/producto/${id}`}>
                Ver detalle
                </Link>
            </Button>
        </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item