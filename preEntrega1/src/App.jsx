import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/checkout/Checkout'
import Footer from './components/footer/Footer'

function App() {

  return (
    <ChakraProvider>
      <ContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='VICKYS Regaleria'/>}/>
          <Route path='/categoria/:categoryId' element= {<ItemListContainer title='VICKYS Regaleria'/>}/>
          <Route path='/producto/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  )
}

export default App
