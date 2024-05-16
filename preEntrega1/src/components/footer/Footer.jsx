import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill,  RiWhatsappFill  } from "react-icons/ri";
import { MdEmail } from "react-icons/md";   

const Footer = () => {
  return (
    <Footer>
        <Box>
            <Box>
                SEGUINOS
                <MdFacebook />
                <RiInstagramFill />
            </Box>
            <Divider orientation='vertical' />
            <Box>
                CONTACTANOS
                <RiWhatsappFill />
                <MdEmail />
            </Box>
        </Box>
    </Footer>
)
}

export default Footer