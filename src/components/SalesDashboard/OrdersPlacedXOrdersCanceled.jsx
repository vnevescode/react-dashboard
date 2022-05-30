import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React from 'react'
import Chart from 'react-apexcharts';

const OrdersPlacedXOrdersCanceled = () => {

    const series = [ //data on the y-axis
      {
          name: "Realizados",
          type: 'column',
          data: [54, 70, 57, 66, 61, 58, 3, 12, 13,56,65,62]
      },
      {
        name: "Cancelados",
        type: 'column',
        data: [44, 20, 41, 15, 10, 51, 23, 10, 25,10,45,76]
    },    

    ];
    const options = { //data on the x-axis
        chart: { 
          stacked: false,
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 2,
            color: '#000',
            opacity: 0.26
            }
        },
        xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            
        },
        dataLabels: { enabled: false },
        colors: ['#109e8e', '#f18f7f'],
        fill: { 
            opacity: 1,             
        },
        stroke: { show: true, width: -5, },        
        legend: {
          position: 'top',
          horizontalAlign: "left",          
          onItemHover: {
            highlightDataSeries: true
          },
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '50px',                
              borderRadius: 3,              
              rangeBarGroupRows: true  
            }
        },    
        labels: {
            show: false
        },       
        yaxis: { 
            show: false 
        },
        markers: { 
          size: 4,          
          colors: '#fff',
          strokeColors: ['#109e8e', '#f18f7f'],
          radius: 2 
        },
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
                        
                    >Pedidos realizados x
                    pedidos cancelados</Text>
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
                    height={'330px'} 
                    type={'bar'}                   
                ></Chart>
            </Box>
        </Box>
    </div>
  )
}

export default OrdersPlacedXOrdersCanceled