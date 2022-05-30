import React from 'react'
import { 
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Heading,

} from '@chakra-ui/react'

import DashboardBgImage from '../assets/DashboardPage.svg';
import {ReactComponent as LogoDashboard } from '../assets/LogoDashboard.svg';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { fetchData } from '../api';
import AvarageDailyTicket from '../components/BeginPart/AvarageDailyTicket';
import AvarageMonthlyTicket from '../components/BeginPart/AvarageMonthlyTicket';
import RepairProducts from '../components/BeginPart/RepairProducts';
import StockProducts from '../components/BeginPart/StockProducts';
import OrdersPlacedMonthly from '../components/BeginPart/OrdersPlacedMonthly';
import OrdersSoldMonthly from '../components/BeginPart/OrdersSoldMonthly';
import OrdersPerMonth from '../components/SalesDashboard/OrdersPerMonth';
import ExpectedProfitXActualProfit from '../components/SalesDashboard/ExpectedProfitXActualProfit';
import OrdersPlacedXOrdersCanceled from '../components/SalesDashboard/OrdersPlacedXOrdersCanceled';
import OrdersByCategory from '../components/SalesDashboard/OrdersByCategory';

const Links = ['Dashboard','Projects','Team'];

const resource =  fetchData();

const NavLink = ( { children } ) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200','gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);


const Dashboard = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = resource;

  console.log(color);



  return (
    <>
      <Box as="header" bg={useColorModeValue('gray.100','gray.900')} px={4}  position="fixed" w={'100%'} h={'84px'} zIndex={'100'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
          ></IconButton>
          <HStack spacing={8} alignItems={'center'}>
            <Box><LogoDashboard/></Box>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md:'flex'}}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>  */}           
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                ></Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider></MenuDivider>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>          
        </Flex>

        {isOpen? (
          <Box pb={4} display={{ md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link)=>(
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
      
      <Flex pt={16} bg={`transparent url(${DashboardBgImage}) 0% 0% no-repeat padding-box`}>
        <Box w={'200px'}>
          TESTE
        </Box>
        <Box as="main" w={'100%'}>
          <Box p={4} h={'300px'}>
            <Heading 
              as='h1' 
              size='lg' 
              mt={'45px'}
              fontSize={'28px'}
              fontWeight={'bold'}
              color={'#4E5D66'}

            >
              Início
            </Heading>
            <HStack spacing='32px'>
              <AvarageDailyTicket data/>
              <AvarageMonthlyTicket />
              <RepairProducts/>
              <StockProducts />
              <OrdersPlacedMonthly />
              <OrdersSoldMonthly/>              
            </HStack>
          </Box>
          <Box p={4} h={'700px'} w={'100%'}>
              <Heading 
                as='h1' 
                size='lg' 
                mt={'45px'}
                fontSize={'28px'}
                fontWeight={'bold'}
                color={'#5A4CA7'}

              >
                Dashboard de vendas
              </Heading>
              <HStack spacing='32px'>
                <OrdersPerMonth /> 
                <ExpectedProfitXActualProfit />  
                <OrdersPlacedXOrdersCanceled/>
                <OrdersByCategory/>
              </HStack>
          </Box>
          <Box p={4} h={'500px'} >Main Content Here</Box>
          <Box p={4} h={'300px'}>Main Content Here</Box>
      </Box>
      </Flex> 

    </>
  )
}

export default Dashboard