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
  import styles from '../modules/styles.module.css'


const NavBar = () => {
  return (
    <Box backgroundColor='indigo'>
      <Flex  w='100%' h='200px' alignItems='center'>
        <Box margin='50px' boxSize='150px'> <img src={banner} /></Box>
      </Flex>
    <Flex gap='30px' className={styles.menu} >
        <Menu isLazy>
            <MenuButton className={styles.menubutton} >CATEGORIAS</MenuButton>
        <MenuList className={styles.menulist}>
            <MenuItem><Link to='/categoria/belleza'>ACCESORIOS</Link></MenuItem>
            <MenuItem><Link to='/categoria/accesorios'>BELLEZA</Link></MenuItem>
            <MenuItem><Link to='/categoria/manicuria'>MANICURIA</Link></MenuItem>
        </MenuList>
        </Menu>
      </Flex>
      <Link to='/cart'>
        <CartWidget className={styles.carrito}/>
      </Link>
    </Box>
  )
}

export default NavBar