import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';


const TransactionsByDevice = () => {

    const series = [65560.46,106642.86];

    const options = {                        
        labels: ["Desktop","Mobile"],
        colors:['#eb657b','#393c56'],
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
                fontSize: '15px',                             
            },
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined,
            },            
            y: {
                formatter: function(value) { 
                    const seriesSum =  series[0] + series[1];
                    return `<div>
                        <div>${((value/seriesSum) * 100).toFixed(2)}%</div>
                        <div>${value} transações</div>
                    </div>`
                }                
            },        
            
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
                        
                    >Transações por aparelho</Text>
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

export default TransactionsByDevice