import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {useCounter} from '../../hooks/useCounter'
import styles from './ItemCount.module.css'

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
        <Flex className={styles.containerCount}>
            <Flex>
                <Button className={styles.button} onClick={decrementar} disabled={count <= initialValue}>-</Button>
                <Heading className={styles.cantidad} >{count}</Heading>
                <Button className={styles.button} onClick={incrementar} disabled={count >= stock}>+</Button>
            </Flex>
            <Button className={styles.buttonAgregar} onClick={() => onAdd(count)} disabled={count > stock} >
                Agregar al carrito
            </Button>
        </Flex>
        );
    }
};

export default ItemCount