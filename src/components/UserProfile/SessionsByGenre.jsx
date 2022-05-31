import React from 'react'
import { Box, Flex, Select, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';



const SessionsByGenre = () => {

    const series = [62780.23,85321.43];

    const options = {                
        labels: ["Masculino","Feminino"],
        colors:['#F7C982','#393C56'],
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
                        
                    >Sessões por gênero</Text>
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

export default SessionsByGenre