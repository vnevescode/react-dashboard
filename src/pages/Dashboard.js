import React, { useState, useEffect } from 'react'
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
  InputGroup,
  Input,
  InputRightElement,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Text,

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
import Sessions from '../components/ConversionFunnel/Sessions';
import ProductViews from '../components/ConversionFunnel/ProductViews';
import ConversionProductPage from '../components/ConversionFunnel/ConversionProductPage';
import AdditionsToCart from '../components/ConversionFunnel/AdditionsToCart';
import CheckoutShipping from '../components/ConversionFunnel/CheckoutShipping';
import CheckoutEmail from '../components/ConversionFunnel/CheckoutEmail';
import CheckoutRegistration from '../components/ConversionFunnel/CheckoutRegistration';
import CheckoutDelivery from '../components/ConversionFunnel/CheckoutDelivery';
import CheckoutPayment from '../components/ConversionFunnel/CheckoutPayment';
import TransactionsByAge from '../components/UserProfile/TransactionsByAge';
import SessionsByGenre from '../components/UserProfile/SessionsByGenre';
import TransactionsByCustomerType from '../components/UserProfile/TransactionsByCustomerType';
import TransactionsByDevice from '../components/UserProfile/TransactionsByDevice';
import TableProductsList from '../components/TableProducts/TableProductsList';

const Links = ['Dashboard','Projects','Team'];

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
  
  const [resource,setResource] = useState('')
  const [avarageDailyTicketData,setAvarageDailyTicketData] = useState('')
  const [avarageMonthlyTicketData,setAvarageMonthlyTicketData] = useState('')
  const [repairProductsData,setRepairProductsData] = useState('')
  const [stockProductsData,setStockProductsData] = useState('')
  const [ordersPlacedMonthlyData, setOrdersPlacedMonthlyData] = useState('')
  const [ordersSoldMonthlyData, setOrdersSoldMonthlyData] = useState('')

  const [ordersPerMonthData,setOrdersPerMonthData] = useState('')
  const [expectedProfitXActualProfit,setExpectedProfitXActualProfitData] = useState('')
  const [ordersPlacedXOrdersCanceledData,setOrdersPlacedXOrdersCanceledData] = useState('')

  useEffect(() =>{
    fetchData().then((res)=>{
      setResource(res)
    })    
  }
  ,[]);
  
  console.log('resource outside',resource)

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
            {resource && <Text mr={'10px'}>{resource[0].data.name}</Text>}
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                { resource &&
                <Avatar
                  size={'sm'}
                  src={resource[0].data.avatar }
                ></Avatar>}
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
              {resource && <AvarageDailyTicket data={resource[1].data}/>}
              {resource &&<AvarageMonthlyTicket data={resource[2].data} />}
              {resource &&<RepairProducts data={resource[3].data}/>}
              {resource &&<StockProducts data={resource[4].data}/>}
              {resource &&<OrdersPlacedMonthly data={resource[5].data}/>}
              {resource &&<OrdersSoldMonthly data={resource[6].data}/>}
            </HStack>
          </Box>
          <Box p={4} h={'600px'} w={'100%'}>
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
                {resource && <OrdersPerMonth data={resource[7].data}/> }
                <ExpectedProfitXActualProfit />  
                <OrdersPlacedXOrdersCanceled/>
                <OrdersByCategory/>
              </HStack>
          </Box>
          <Box p={4} h={'500px'}>
              <Heading 
                as='h1' 
                size='lg' 
                mt={'45px'}
                fontSize={'28px'}
                fontWeight={'bold'}
                color={'#5A4CA7'}

              >
                Funil de conversão
              </Heading>
              <HStack spacing='32px'>
                <Sessions/>
                <ProductViews/>
                <ConversionProductPage/>
                <AdditionsToCart/>
                <CheckoutShipping/>
                <CheckoutEmail/>
                <CheckoutRegistration/>
                <CheckoutDelivery/>
                <CheckoutPayment/>
              </HStack>
          
          </Box>
          <Box p={4} h={'500px'}>
              <Heading 
                as='h1' 
                size='lg' 
                mt={'45px'}
                fontSize={'28px'}
                fontWeight={'bold'}
                color={'#5A4CA7'}

              >
                Perfil do Usuário
              </Heading>
              <HStack spacing='32px'>
                <TransactionsByAge/>
                <SessionsByGenre/>
                <TransactionsByCustomerType/>
                <TransactionsByDevice/>
              </HStack>
          </Box>
          <Box p={4} h={'1500px'}>
              <TableProductsList/>
          </Box>
      </Box>
      </Flex> 

    </>
  )
}

export default Dashboard