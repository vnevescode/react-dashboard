import { Box, Flex, Select, Text } from '@chakra-ui/react';
import React from 'react'
import Chart from 'react-apexcharts';

const ExpectedProfitXActualProfit = () => {

    const series = [ //data on the y-axis
      {
          name: "Real",
          type: 'column',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66,10,21,76]
      },
      {
        name: "Expectativa",
        type: 'column',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66,10,21,76]
    },
    {
      name: "Real do ano anterior",
      type: 'line',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66,10,21,76]
    },
    {        
        name: 'Expectativa do ano anterior',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
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
        colors: ['#9DD6D3', '#F78899', '#393C56','#E0347D'],
        fill: { 
            opacity: 1,             
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          onItemHover: {
            highlightDataSeries: true
          },
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
        markers: { 
          size: 4,          
          colors: '#fff',
          strokeColors: ['#9DD6D3', '#F78899', '#393C56','#E0347D'],
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
                        
                    >Expectativa de lucro x lucro real</Text>
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
                                       
                ></Chart>
            </Box>
        </Box>
    </div>
  )
}

export default ExpectedProfitXActualProfit