import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import banner from '../../assets/image/banner-cir.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <img src={banner} alt="logo"/>
        <Menu isLazy>
            <MenuButton>CATEGORIAS</MenuButton>
        <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>BELLEZA</MenuItem>
            <MenuItem>ACCESORIOS</MenuItem>
            <MenuItem>MARROQUINERIA</MenuItem>
        </MenuList>
        </Menu>
        <CartWidget/>
    </div>
  )
}

export default NavBar