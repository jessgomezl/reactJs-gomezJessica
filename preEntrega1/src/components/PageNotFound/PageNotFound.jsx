import React from 'react'
import { Box } from '@chakra-ui/react'
import error from '../../assets/image/error.png'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <Box className={styles.containerError}>
      <img src={error}/>
    </Box>
  )
}

export default PageNotFound