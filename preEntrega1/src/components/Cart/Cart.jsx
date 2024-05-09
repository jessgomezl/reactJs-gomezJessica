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
} from '@chakra-ui/react'
import { RiDeleteBinFill } from "react-icons/ri";

const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(Context)


  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
        <Th><RiDeleteBinFill /></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        cart.map((prod) => (
          
          <Tr key={prod.id}>
            <Td>{prod. nombre}</Td>
            <Td>{prod.quantity}</Td>
            <Td>{prod.precio}</Td>
            <Td>{prod.precio * prod.quantity}</Td>
            <Td>{}</Td>
          </Tr>
        ))
      }
      
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default Cart