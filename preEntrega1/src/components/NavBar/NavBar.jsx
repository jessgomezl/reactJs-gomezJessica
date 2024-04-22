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
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box>
        <Heading> <img src={banner} /></Heading>
        <Menu isLazy>
            <MenuButton>CATEGORIAS</MenuButton>
        <MenuList>
            <MenuItem><Link to='/categoria/belleza'>ACCESORIOS</Link></MenuItem>
            <MenuItem><Link to='/categoria/accesorios'>BELLEZA</Link></MenuItem>
            <MenuItem><Link to='/categoria/manicuria'>MANICURIA</Link></MenuItem>
        </MenuList>
        </Menu>
        <CartWidget/>
    </Box>
  )
}

export default NavBar