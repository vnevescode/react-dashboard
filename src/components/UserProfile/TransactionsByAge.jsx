import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';


const TransactionsByAge = () => {
    const series = [ //data on the y-axis
    {
        name: "",
        data: [44, 1200, 1640, 1350, 800, 1020, 200]
    }
    ];
    const options = { //data on the x-axis
        chart: { 
            id: 'bar-chart'
        },
        xaxis: {
            categories: ['-18','18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
            labels:{
                formatter: (value) => { return ( value >= 1000 ? (value/1000)+'MIL': value) },
                style: {                
                    fontSize: '16px',                
                    fontWeight: 'bold',
                    
                }, 
            },  
            
            
        },
        dataLabels: { enabled: false },
        fill: { 
            opacity: 1,
            colors: ['#393C56'],

        },
        plotOptions: {
            bar: {
            horizontal: true,
            columnWidth: '40px',  
            borderRadius: 3,
            }
        },    
        labels: {
            show: true
        },
        yaxis: { 
            show: true,
            tooltip: {
                enabled: false,
                offsetX: 0,
            },
            max: 3000,
            labels:{
                style: {                
                    fontSize: '12px',                
                    fontWeight: 'bold',
                    letterSpacing: '0.48px',
                    lineHeight: '13px',

                }, 
            },  
        },
        tooltip: {
            style: {
                fontSize: '20px',                             
            },            
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {                    
                    return `${value}`
                }                
            },        
            
        }
    };
  return (
    <div>
         <Box
            background={'#FFFFFF 0% 0% no-repeat padding-box'}
            border={'1px solid #eee'}
            w='608px' 
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
                        
                    >Pedidos do Mês</Text>
                </Box>
                

            </Flex>
            <Box>                
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={'330px'}                    
                ></Chart>
            </Box>
        </Box>
    </div>
  )
}

export default TransactionsByAge