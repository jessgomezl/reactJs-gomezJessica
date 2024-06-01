import React, { useContext, useEffect } from 'react';
import Context from '../../context/CartContext';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Link as ChakraLink,
  Box,
  Divider,
  Center
} from '@chakra-ui/react';
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(Context);

  useEffect(() => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Aún no agregaste productos al carrito",
        confirmButtonText: 'Cerrar'
      });
    }
  }, [cart]);

  if (cart.length === 0) {
    return (
      <Box className={styles.boxVer}>
        <ChakraLink as={Link} className={styles.verProductos} to='/'>Ver productos</ChakraLink>
      </Box>
    );
  } else {
    return (
      <TableContainer >
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Cantidad</Th>
              <Th>Precio</Th>
              <Th>Subtotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((prod) => (
              <Tr key={prod.id}>
                <Td>{prod.nombre}</Td>
                <Td>{prod.quantity}</Td>
                <Td>${prod.precio}</Td>
                <Td>${prod.precio * prod.quantity}</Td>
                <Td>
                  <Button onClick={() => removeItem(prod.id)}>
                    <RiDeleteBinFill />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total: ${getTotal()}</Th>
              <Th>
                <Button onClick={() => clearCart()}>
                  Vaciar Carrito
                </Button>
              </Th>
              <Td colSpan={3}>
                <Center height='50px'>
                  <Divider orientation='vertical' />
                </Center>
                <Box textAlign="center" mt={4}>
                  <ChakraLink as={Link} to='/checkout'>
                    Finalizar Compra
                  </ChakraLink>
                </Box>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  }
}

export default Cart;