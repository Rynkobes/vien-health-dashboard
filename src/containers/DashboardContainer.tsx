import React from 'react'
import { Flex } from '@chakra-ui/layout'
import SideNav from '../components/SideNav'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import DataSection from '../components/DataSection'

const DashboardContainer = () => {
  return (
    <Flex
      flexDirection='column'
    >
      <TopNav />
      <Flex
      bg='#EAEDF3'
      flexDirection='column'
      pl={20}
      pr={20}
    >
      <Flex>
        <SideNav />
        <DataSection />
      </Flex>
      
      <Footer />
    </Flex>
    </Flex>
  )
}

export default DashboardContainer
