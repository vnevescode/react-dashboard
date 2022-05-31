import { 
    Box, 
    Button, 
    Flex, 
    Heading, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Tfoot, 
    Th, 
    Thead, 
    Tr,
    ChakraProvider 
} from '@chakra-ui/react'
import React, { useMemo } from 'react'

import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";

const Minimal = () => {
    const {
      currentPage,
      setCurrentPage,
      pagesCount,
      pages
    } = usePagination({
      pagesCount: 12,
      initialState: { currentPage: 1 },
    });
  
    return (
      <ChakraProvider>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        >
          <PaginationContainer>
            <PaginationPrevious>Previous</PaginationPrevious>
            <PaginationPageGroup>
              {pages.map((page) => (
                <PaginationPage 
                  key={`pagination_page_${page}`} 
                  page={page} 
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext>Next</PaginationNext>
          </PaginationContainer>
        </Pagination>
      </ChakraProvider>
    );
  };


const TableProductsList = () => {
  return (
    <div>
        <Box h={'1182px'} w={'1736px'} mt={'45px'} p={'50px'} border={'1px solid red'}>
              <Flex justifyContent={'space-between'}>
                <Heading 
                      as='h1' 
                      size='lg' 
                      
                      fontSize={'28px'}
                      fontWeight={'bold'}
                      color={'#5A4CA7'}

                    >
                  Listagem de Produtos
                </Heading>
                <Box>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type={'text'}
                      placeholder='Pesquisar produto'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' >
                        
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
              <TableContainer mt={'20px'}>
                <Table size='lg'>
                  <Thead bg={'tomato'}>
                    <Tr>
                      <Th>Produto</Th>
                      <Th>Cores</Th>
                      <Th>Especificações</Th>
                      <Th>Status</Th>                      
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Banco Cajá</Td>
                      <Td>Madeira escura; Madeira Média</Td>
                      <Td>banco; sem braço; sala de jantar</Td>
                      <Td>Ativo V</Td>
                    </Tr>
                    <Tr>
                      <Td>Banco Cajá</Td>
                      <Td>Madeira escura; Madeira Média</Td>
                      <Td>banco; sem braço; sala de jantar</Td>
                      <Td>Ativo V</Td>
                    </Tr>
                    <Tr>
                      <Td>Banco Cajá</Td>
                      <Td>Madeira escura; Madeira Média</Td>
                      <Td>banco; sem braço; sala de jantar</Td>
                      <Td>Ativo V</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
              
          </Box>
          <Minimal/>
    </div>
  )
}

export default TableProductsList