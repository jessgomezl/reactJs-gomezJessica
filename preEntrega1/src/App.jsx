import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='VICKYS Regaleria'/>}/>
          <Route path='/categoria/:categoryId' element= {<ItemListContainer title='VICKYS Regaleria'/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
