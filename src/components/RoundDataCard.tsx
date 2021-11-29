import React from 'react'
import { Flex, Text, Image, Box, CircularProgress  } from '@chakra-ui/react'
import { FaEllipsisH } from 'react-icons/fa'
import { DataCardProps } from './DataCards'


const RoundDataCard = (props: DataCardProps) => {
  const {label, statsLabel, stats, incrementingStat, 
    statColor, duration, icon, incStatColor, progColor,
    prgressNumber
  } = props

  return (
    <Flex
      bg = '#fff'
      w='25vw'
      h='35vh'
      border = '1px solid #EAECEE'
      shadow='sm'
      borderRadius={6}
      flexDirection='column'
    >
      <Flex 
        align='center'
        justify='space-between'
        p={3}
      >
        <Flex>
          <Image src={icon} />
          <Flex
            flexDirection='column'
            pl={4}
          >
            <Text color='#484848' fontSize={16} fontWeight='900'>{label}</Text>
            <Text color={incStatColor} fontSize={13}>{incrementingStat}</Text>
          </Flex>
        </Flex>
        
        <FaEllipsisH color='#9EA0A5' />
      </Flex>
      <Box border='1px solid #EAECEE'/>
      <Flex p={5}>
        <CircularProgress value={prgressNumber} size='120px' thickness='15px' color={progColor}/>
        <Flex
          flexDirection='column'
          align='flex-end'
          w='100%'
        >
          <Text fontSize={20} fontWeight='700' >{statsLabel}</Text>
          <Text fontSize={13} color='#484848'>{stats}</Text>
            <Box border='1px solid #EAECEE' w='95%' mt={2} mb={2} />
          <Text fontSize={20} fontWeight='700' >{duration}</Text>
          <Text fontSize={13} color='#484848'>{statColor}</Text>
        </Flex>
      </Flex>
      
    </Flex>
  )
}

export default RoundDataCard
