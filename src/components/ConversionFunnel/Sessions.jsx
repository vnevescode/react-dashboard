import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Sessions = () => {
  return (
    <div>
        <Box 
            background={'#FFFFFF 0% 0% no-repeat padding-box'}
            border={'1px solid #eee'}
            w='232px' 
            h='168px' 
            bg='#ffffff'            
            pl={'16px'}
            pt={'25px'}
            borderRadius={'15px'}
            opacity={'1'}
            mt={'32px'}
        >
            <Text 
                textAlign={'left'} 
                letterSpacing={'0px'} 
                color={'#4E5D66'} 
                opacity={'1'}
                fontSize={'16px'}
                fontWeight={'bold'}
                lineHeight={'18px'}
                
            >Sessões</Text>
            <Box 
                boxShadow={' 0px 0px 20px #0000001A;'} 
                background={'#FFFFFF 0% 0% no-repeat padding-box'}
                w={'fit-content'}
                h='23px' 
                mt={'12px'}
                borderRadius={'12px'}
                opacity={'1'}
            >
                <Text 
                    color={'#109E8E'}
                    textAlign={'left'}
                    letterSpacing={'0px'}
                    opacity={'1'}
                    lineHeight={'13px'}
                    fontSize={'12px'}
                    fontWeight={'bold'}
                    p={'5px 11px 5px 7px'}
                >+ 15 %</Text>
            </Box>
             <Text
                mt={'15px'}                
                color={'#109E8E'}
                textAlign={'left'}
                fontSize={'14px'}
                lineHeight={'16px'}
                letterSpacing={'0px'}
                opacity={'1'}            
            >em relação a ontem</Text>             
            <Flex mt={'18.5px'} >
                <Text
                    fontSize={'22px'}
                    lineHeight={'24px'} 
                    fontWeight={'bold'}
                    color={'#4E5D66'}
                    textAlign={'left'}
                    letterSpacing={'0px'}
                    opacity={'1'}
                    mr={'12px'}
                    
                    
                >2053</Text>
                <Text
                    fontSize={'16px'}
                    color={'#4E5D66'}
                    textAlign={'left'}
                    letterSpacing={'0px'}
                    opacity={'1'}
                    fontSize={'16px'}
                    lineHeight={'18px'}                     
                    mt={'2.5px'}
                    
                >
                    visualizações
                </Text>
            </Flex>
            
            
        </Box>
    </div>
  )
}

export default Sessions