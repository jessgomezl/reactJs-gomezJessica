import React from 'react'
import styles from './NavBar.module.scss'
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
    <Box className={styles.navbar}>
      <Flex>
        <Box className={styles.banner}> <img src={banner} /></Box>
      </Flex>
    <Flex className={styles.menu} >
        <Menu isLazy>
            <MenuButton className={styles.menubutton} >CATEGORIAS</MenuButton>
        <MenuList className={styles.menulist}>
            <MenuItem><Link className={styles.NavBarLink} to='/categoria/accesorios'>ACCESORIOS</Link></MenuItem>
            <MenuItem><Link className={styles.NavBarLink} to='/categoria/belleza'>BELLEZA</Link></MenuItem>
            <MenuItem><Link className={styles.NavBarLink} to='/categoria/manicuria'>MANICURIA</Link></MenuItem>
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