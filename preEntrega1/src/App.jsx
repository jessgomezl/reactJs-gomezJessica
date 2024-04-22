import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='VICKYS Regaleria'/>}/>
          <Route path='/categoria/:categoryId' element= {<ItemListContainer title='VICKYS Regaleria'/>}/>
          <Route path='/producto/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
