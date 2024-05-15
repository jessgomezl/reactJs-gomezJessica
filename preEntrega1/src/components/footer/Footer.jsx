import { Box, Divider,Center, Th } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill,  RiWhatsappFill  } from "react-icons/ri";
import { MdEmail } from "react-icons/md";   

const Footer = () => {
  return (
    <Footer>
        <Box>
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
        <Box>
            <Th>
                SEGUINOS
                <MdFacebook />
                <RiInstagramFill />
            </Th>
            <Th>
                CONTACTANOS
                <RiWhatsappFill />
                <MdEmail />
            </Th>
        </Box>
        </Box>
    </Footer>
)
}

export default Footer