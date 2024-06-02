import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import banner from '../../assets/image/banner-cir.png'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


const NavBar = () => {
  return (
    <Box className={styles.containerNav}>
      <Flex className={styles.containerBanner}>
        <Box className={styles.banner}> <img src={banner} /></Box>
      </Flex>
    <Flex className={styles.containerMenuCartwidget} >
      <Menu isLazy>
        <MenuButton className={styles.categorias}>CATEGORIAS</MenuButton>
        <MenuList >
          <MenuItem><Link to='/categoria/accesorios'>ACCESORIOS</Link></MenuItem>
          <MenuItem><Link to='/categoria/belleza'>BELLEZA</Link></MenuItem>
          <MenuItem><Link to='/categoria/manicuria'>MANICURIA</Link></MenuItem>
        </MenuList>
      </Menu>
      <Box className={styles.containerCartwidget} >
        <CartWidget/>
      </Box>
    </Flex>
  </Box>
)
}

export default NavBar