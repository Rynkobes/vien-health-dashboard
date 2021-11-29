import React from 'react'
import {Flex, Text, Image} from '@chakra-ui/react'

interface NavItemProps{
  navText: string
  icon?: string
  bb?: string
  fWeight?: string
}

const NavItem = (props: NavItemProps) => {

  const { navText, icon, bb, fWeight}  = props

  return (
    <Flex
      p={2}
      m='0px 15px 15px'
      mb={0}
      borderTop='1px solid #E8E8E8'
      justify='space-between'
      align='center'
      borderBottom={bb}
      fontWeight={fWeight}
    >
      <Text 
        fontWeight={fWeight ? fWeight : '300'}
        fontSize='14px' >
          {navText}
      </Text>
      <Image src={icon} />
    </Flex>
  )
}

export default NavItem
