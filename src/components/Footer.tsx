import React from 'react'
import { Flex, Text, UnorderedList, ListItem, Heading, Link } from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

interface FooterSectionProps{
  heading?: string
  link1: string
  link2: string
  link3?: string
  link4?: string
  children?: React.ReactElement
  align?: string
  ml?: number
}

export const FooterSection = (props: FooterSectionProps) => {

  const { heading, link1, link2, link3, link4, align, children,
  ml } = props
  const color = '#767676'
  

  return(
    <Flex
      flexDirection='column'
      justifyContent={ align ? 'center' : 'flex-start'}
      p={2}
      ml={ml ? ml : '0'}
    >
      <Heading as='h4' size='sm' pb={3}>{heading}</Heading>
        <Link fontSize='13px' color={color} pt={1}>{link1}</Link>
        <Link fontSize='13px' color={color} pt={1}>{link2}</Link>
        <Link fontSize='13px' color={color} pt={1}>{link3}</Link>
        <Link fontSize='13px' color={color} pt={1}>{link4}</Link>
        {children}
    </Flex>
  )
}

const Footer = () => {
  return (
    <Flex
      flexDirection='column'
    >
      <Flex 
      w='90vw'
      justify='space-between'
    >
      <FooterSection 
          link1='Counter Delivery, Carter Beach'
          link2='PostCentre, Westport'
          align='center'
        />

        <FooterSection 
          heading='About'
          link1='Company'
          link2='Team'
          link3='Careers'
          link4='Blog'
        />
        <FooterSection 
          heading='Support'
          link1='Help Center'
          link2='Cancellation Options'
          link3='Neighborhood Support'
          link4= "Trust & Safety"
        />
        <Flex
        flexDirection ='column'
        align='flex-start'
        >
        <FooterSection 
          heading='Address'
          link1='Cpunter Delivery, Carter Beach'
          link2='PostCentre, Westport' 
        />
      
      <Flex
      w='100%'
      justifyContent='space-between'
      >
        <FaFacebook size='1.8em' color="#016450" />
        <FaInstagram size='1.8em'color="#016450" />
        <FaTwitter size='1.8em' color="#016450" /> 
      </Flex>
        </Flex>
    </Flex>
    <Flex 
        justify='center'
        pt={5}
        pb={5}
    >
      <Text fontSize='13px'> &copy;Udwell, LLC. All rights reserved.</Text>
      <UnorderedList 
        display='flex'
        flexDirection='row'
      >
        <ListItem mr={10} ml={10} fontSize='13px'>Terms & Conditions</ListItem>
        <ListItem fontSize='13px'>Privacy Policy</ListItem>
      </UnorderedList>
    </Flex>
    </Flex>
  )
}

export default Footer
