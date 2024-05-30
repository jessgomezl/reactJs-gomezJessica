import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import banner from '../../assets/image/banner-cir.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Heading,
    Box,
    Flex,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <Box>
      <Flex>
        <Box > <img src={banner} /></Box>
      </Flex>
    <Flex >
      <Menu isLazy>
          <MenuButton >CATEGORIAS</MenuButton>
        <MenuList >
          <MenuItem><Link to='/categoria/accesorios'>ACCESORIOS</Link></MenuItem>
          <MenuItem><Link to='/categoria/belleza'>BELLEZA</Link></MenuItem>
          <MenuItem><Link to='/categoria/manicuria'>MANICURIA</Link></MenuItem>
        </MenuList>
      </Menu>
    </Flex>
      <Box >
        <CartWidget />
      </Box>
    </Box>
  )
}

export default NavBar