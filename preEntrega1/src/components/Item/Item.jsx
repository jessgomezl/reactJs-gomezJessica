import React from 'react';
import { Card, CardBody, CardFooter,Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react';

const Item = ({nombre, precio, img, stock}) => {
  return (
    <Card maxW='sm'>
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
            <Button variant="ghost" color="#c86f43" >
                Ver detalle
            </Button>
        </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item