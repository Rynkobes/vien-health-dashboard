import React from 'react'
import {Flex, Text, Progress, Box } from '@chakra-ui/react'

export interface DataCardProps {
  children?: React.ReactNode
  graphChild?: React.ReactChild
  label: string
  labelDuration?: string
  stats?: string
  statsLabel?: string
  incrementingStat?: string
  duration?: string
  statColor?: string
  icon? : string
  incStatColor?: string
  progColor?: string
  prgressNumber?: number


}

const DataCards = (props: DataCardProps) => {
  
  const {label, labelDuration, stats, 
        incrementingStat, statColor, 
        duration, children, graphChild} = props
  return (
    <Flex
      bg = '#fff'
      w='20vw'
      h='25vh'
      border = '1px solid #EAECEE'
      shadow='sm'
      borderRadius={6}
      flexDirection='column'
      p={5}
    >
      <Flex justify='space-between'>
        <Text color='#484848' fontSize={16} fontWeight='900'>{label}</Text>
        <Text color='#9EA0A5'>{labelDuration}</Text>
      </Flex>

      <Flex
        align='center'
        justify='space-between'
        mt={2}
        mb={2}
      >
        <Text color='#3E3F42' fontWeight='900' fontSize={40}>{stats}</Text>
        <Text color={statColor ? statColor : '#696969'} fontSize={20} >{incrementingStat}</Text>
      </Flex>
          <Box>
            {children}
          </Box>
      <Flex>
        <Text color='#A3A3A3' fontSize='15px' mt={2}>{duration}</Text>
        {children}
      </Flex>
    </Flex>
  )
}

export default DataCards
