import React from 'react'
import Chart from 'react-apexcharts';
import { Flex, Box, Text, Select } from '@chakra-ui/react';

const OrdersPerMonth = () => {

const series = [ //data on the y-axis
{
    name: "Temperature in Celsius",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66,10,21,76]
}
];
const options = { //data on the x-axis
    chart: { 
        id: 'bar-chart'
    },
    xaxis: {
        categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        
    },
    dataLabels: { enabled: false },
    fill: { 
        opacity: 1,
        colors: ['#393C56'],

    },
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40px',  
          borderRadius: 3,
        }
    },    
    labels: {
        show: false
    },
    yaxis: { 
        show: false 
    },
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
                    type="bar"
                    height={'330px'}                    
                ></Chart>
            </Box>
        </Box>
    </div>
  )
}

export default OrdersPerMonth