import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React from 'react'
import Chart from 'react-apexcharts';

const OrdersByCategory = () => {

    const series = [11245,32250,20101,25467,25000];

    const options = {                
        labels: ["Mesa Eva Laranja","Mesa Eva Rosa","Mesa Eva Azul Escuro","Mesa Eva Azul Claro","Mesa Eva Verde"],
        colors:['#f1c483','#ec657a','#393c56','#7bb686','#9dd5d3'],
        plotOptions:{
            pie:{
                expandOnClick:false,
                donut:{
                    size:'50px',
                    labels:{
                        show:false,
                       
                    }
                }
            }
        },
        dataLabels: {
            enabled: false,
            dropShadow: {
                blur: 3,
                opacity: 0.8
            }
        },
        stroke: { show: false },
        tooltip: {
            style: {
                fontSize: '25px',                
            },            
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {                    
                    return `R$ ${value}`
                }                
            },        
            
        }
    };

  return (
    <div>
        <Box
            background={'#FFFFFF 0% 0% no-repeat padding-box'}
            border={'1px solid #eee'}
            w='715px' 
            h='400px'       
            p='25px'
            mt={'32px'}
        >
            <Flex justifyContent={'space-between'}>
                <Box>
                    <Text
                       fontSize={'19px'}
                       lineHeight={'23px'} 
                       fontWeight={'bold'}
                       color={'#333333'}
                       textAlign={'left'}
                       letterSpacing={'0px'}
                       opacity={'1'}
                        
                    >Pedidos por Categorias</Text>
                </Box>
                <Box>
                    <Select 
                        placeholder='Ano' 
                        variant='filled' 
                        bg='#F3F5F6' 
                        color={'#33333340'} 
                        size='sm'
                        w='175px'
                    >
                        <option value='option1'>2021</option>
                        <option value='option2'>2022</option>
                        <option value='option3'>2023</option>
                    </Select>
                </Box>

            </Flex>
            <Box>                
                <Chart
                    options={options}
                    series={series}
                    type={'donut'}                                        
                    height={'330px'}                   
                ></Chart>
            </Box>
        </Box>
    </div>
  )
}

export default OrdersByCategory