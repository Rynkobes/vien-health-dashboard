import React from 'react'
import {Flex,  Text, Box} from '@chakra-ui/react'
import { FaEllipsisH } from 'react-icons/fa'
import RoundDataCard from './RoundDataCard'
import LineGraphData from './LineGraphData'

interface SectionProps {
  cardLabel: string
  rowOrientation?: string
  avatar?: string
  cardTitle: string
  incrementingStat?: string
  incStatColor?: string
  progColor: string
  rdStat?: string
  rdstatLable?: string
  rdstat2?: string
  laben2nd?: string
  prgressNumber?: number
  graphColor: string
  graphFill: string
}

const LineGraphDataSection = (props: SectionProps) => {

    const { cardLabel, rowOrientation, 
      avatar, cardTitle, incrementingStat,
      rdStat, rdstatLable, rdstat2, laben2nd,
       incStatColor, progColor, prgressNumber, 
      graphColor, graphFill
      } = props
  return (
    <Flex
          direction={rowOrientation ? 'row-reverse' : 'row'}
          justify='space-evenly'
          mb={10}
          >
          <RoundDataCard 
          icon={avatar}
          label={cardTitle}
          incrementingStat={incrementingStat}
          statsLabel={rdStat}
          stats={rdstatLable}
          duration={rdstat2}
          statColor={laben2nd}
          progColor={progColor}
          incStatColor={incStatColor}
          prgressNumber={prgressNumber}
          />
          <Flex
            flexDirection='column'
            bg = '#fff'
            w='36vw'
            h='35vh'
            border = '1px solid #EAECEE'
            shadow='sm'
            borderRadius={6}
          >
          <Flex
            align='center'
            justify='space-between'
            p={3}
            mt={3}
            mb={2}
          >
          <Text color='#484848' fontSize={16} fontWeight='900'>{cardLabel}</Text>
          <FaEllipsisH color='#9EA0A5' />
          </Flex>
          <Box border='1px solid #EAECEE' />
          <LineGraphData 
            graphColor={graphColor}
            graphFill={graphFill}
          />
          </Flex>
        </Flex>
  )
}

export default LineGraphDataSection
