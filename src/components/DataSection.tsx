import React from 'react'
import {Flex, Progress } from '@chakra-ui/react'
import DataCards from './DataCards'
import Icon from '../assests/Icon.png'
import PersonIcon from '../assests/PersonIcon.png'
import BarChartComponent from './BarChartComponent'
import LineGraphDataSection from './LineGraphDataSection'


const DataSection = () => {
  // const {label} = props
  return (
    <Flex
      bg = '#fff'
      w='80vw'
      border = '1px solid Grey.300'
      shadow='md'
      mt={10}
      mb={10}
      // pt={10}
      flexDirection='column'
      borderRadius={6}
    >
      <Flex
      justify='space-evenly'
      mt={8}
      mb={8}
      >
      <DataCards 
        label='Sales'
        labelDuration='Monthly Goal'
        stats='98.1%'
        incrementingStat = '+69%'
        duration='Yearly Goal'
      >
        <Progress value={70} colorScheme='green' borderRadius={8}/>
      </DataCards>
        <DataCards 
          label='Revenue'
          labelDuration='Total Profit'
          stats='$13,893'
          incrementingStat = '+11.3%'
          // duration='Yearly Goal'
          statColor='#FF8433'
        >
          <BarChartComponent />
        </DataCards>      
      <DataCards 
        label='Clients'
        labelDuration='Subscribed'
        stats='1,232'
        incrementingStat = '+3.2%'
        duration='Yearly Goal'
        statColor='#348373'
    >
      <Progress value={70} colorScheme='green' borderRadius={8}/>
    </DataCards>
      </Flex>
        <Flex>
        </Flex>
        <LineGraphDataSection 
          cardLabel='Daily Profit' 
          incStatColor='#348373'
          avatar={Icon} 
          incrementingStat='+$985.56'
          cardTitle='Total Sales'
          progColor='#016450'
          rdStat='$2,595'
          rdstatLable='Invoiced'
          rdstat2='23'
          laben2nd='Invoices'
          prgressNumber={80}
          graphColor='#FF8433'
          graphFill='#ff85335c'
          />

        <LineGraphDataSection 
          cardLabel='Daily Active Clients' 
          rowOrientation='reverse' 
          cardTitle="User Onboarding"
          incrementingStat='Q3 Goal: 8000 Users'
          incStatColor='#A3A3A3'
          progColor='#FACF55'
          rdStat='2452'
          rdstatLable='ONBOARDED'
          prgressNumber={40}
          graphColor='#348373'
          graphFill='#34837361'
          avatar={PersonIcon} />

    </Flex>
  )
}

export default DataSection
