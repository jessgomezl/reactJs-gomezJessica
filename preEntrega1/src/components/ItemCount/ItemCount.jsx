import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {useCounter} from '../../hooks/useCounter'

const ItemCount = ({ stock, initialValue, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

if (stock === 0) {
    return (
        <Flex direction="column" align="center">
            <Text color="red.500" mb={4}>Producto agotado</Text>
        </Flex>
    );
}else {
    return (
        <Flex>
            <Flex>
                <Button onClick={decrementar} disabled={count <= initialValue}>-</Button>
                <Heading>{count}</Heading>
                <Button onClick={incrementar} disabled={count >= stock}>+</Button>
            </Flex>
            <Button onClick={() => onAdd(count)} disabled={count > stock} >
                Agregar al carrito
            </Button>
        </Flex>
        );
    }
};

export default ItemCount