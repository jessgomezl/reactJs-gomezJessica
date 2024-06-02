import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill,  RiWhatsappFill  } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
        <Box className={styles.containerSeguinos}>
            <Text className={styles.textSeguinos} >SEGUINOS</Text> 
            <MdFacebook className={styles.facebook} />
            <RiInstagramFill className={styles.instagram}/>
        </Box>
        <Divider orientation='vertical' />
        <Box className={styles.containerContactanos}>
            <Text className={styles.texContactanos} >CONTACTANOS</Text>
            <RiWhatsappFill className={styles.whatsapp} />
            <MdEmail className={styles.email}/>
        </Box>
    </Box>
)
}

export default Footer