import React, { useContext } from 'react'
import Context from '../../context/CartContext'
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
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(Context)
if (cart.lenght === 0){
    return(
      <Div>
        <Heading>Todavia no agregaste productos</Heading>
        <ChakraLink as={Link} to='/'>Ver productos</ChakraLink>
      </Div>
    )
}else{
  return (
      <TableContainer>
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
        {
          cart.map((prod, index) => (
            
            <Tr key={prod.id} >
              <Td>{prod. nombre}</Td>
              <Td>{prod.quantity}</Td>
              <Td>{prod.precio}</Td>
              <Td>{prod.precio * prod.quantity}</Td>
              <Td> 
                <Button onClick={() => removeItem(prod.id)}>
                  <RiDeleteBinFill />
                </Button>
              </Td>
            </Tr>
          ))
        }
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total: ${getTotal()}</Th>
          <Th>
            <Button onClick={() => clearCart()}>
              Vaciar Carrito
            </Button>
          </Th>
          <ChakraLink as={Link}>
            Finalizar Compra
          </ChakraLink>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
    )
  }
}
export default Cart