import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form'
import {ReactComponent as Logo} from '../assets/logo.svg';
import LoginPageBgImage from '../assets/LoginPage.svg'


const LoginPage = () => {
  return (
    <Container maxW='100%' bg='#eee' h="calc(100vh)" centerContent style={{backgroundImage: `url(${LoginPageBgImage})`}}>
        <Flex w='894px' h="calc(100vh)" align='center' justifyContent='center' bg='white'>
            <Box p='2'>
                <Box textAlign='center'>
                    <Logo/>                    
                </Box>
                <Box textAlign='center' mt="1rem" mb="4rem" fontSize={24} fontWeight={600}>
                    {"Entrar na plataforma"}                   
                </Box>
                <Box my={4} textAlign="left">
                    <Form></Form>
                </Box>
            </Box>
        </Flex>
    </Container>
  )
}

export default LoginPage