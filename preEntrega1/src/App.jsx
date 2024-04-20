import './App.css'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer title='VICKYS Regaleria'/>
      <ItemCount/>
    </ChakraProvider>
  )
}

export default App
