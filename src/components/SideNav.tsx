import React, {useState} from 'react'
import { 
    Flex,
    Box,
    Button,
    Avatar,
    AvatarBadge, 
    Text, 
    Input,
    InputGroup,
    useClipboard,
    InputRightElement 
  } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { AiOutlineCamera } from 'react-icons/ai'
import User from '../assests/User.png'
import Savedsearch from '../assests/Savedsearch.png'
import Messages from '../assests/Messages.png'
import Notifications from '../assests/Notifications.png'
import Analytics from '../assests/Analytics.png'
import Billing from '../assests/Billing.png'
import Blog from '../assests/Blog.png'
import profileImage from '../assests/profileImage.png'
import SavedHomes from '../assests/SavedHomes.png'
import Listing from '../assests/Listing.png'
import NavItem from './NavItem'


const SideNav = () => {
   
  const [ urlInput, setInputUrl ] = useState('https://www.udwell.com/p.')
  const { onCopy } = useClipboard(urlInput)

  return (
    <Flex 
      d='column'
      bgColor='#fff'
      boxShadow='md'
      w='20vw'
      mt={10}
      mb={10}
      mr={10}
      borderRadius={4}
      >
      <Flex
        flexDirection='column'
        alignItems='center'

      >
        <Flex
          flexDirection='column'
          align='center'
        >
          <Avatar 
            src={profileImage}
            size="xl"
            m={3}
          >
              
           <AvatarBadge 
            boxSize="1.1em" 
            bg='#016450' 
            color='#fff' 
            borderColor="#016450"
            as={AiOutlineCamera}/>
          </Avatar>
          <Text p={1} textAlign='center' fontWeight='900' fontSize={15}>Alex Assenmancher</Text>
          <Text textAlign='center' color='#767676' fontSize='14px'>Home Buyer</Text>
        </Flex>
        <Button 
          fontSize='14px'
          h='28px'
          m={3}
          pl={6}
          pr={6}
          bg='#016450'
          color='#fff'
          >Edit profile
        </Button>
      </Flex>
      <Flex
        flexDirection='column'mt={3}
      >
        <NavItem navText='Profile' fWeight='700' icon={User} />
        <NavItem navText='My Listing' icon={Listing}/>
        <NavItem navText='Saved homes' icon={SavedHomes}  />
        <NavItem navText='Saved search' icon={Savedsearch} fWeight='700' />
        <NavItem navText='Messages' icon={Messages}  />
        <NavItem navText='Notifications' icon={Notifications}  />
        <NavItem navText='Billing' icon={Billing}  />
        <NavItem navText='Analytics' icon={Analytics}  />
        <NavItem navText='Blog' icon={Blog} bb='1px solid #E8E8E8' />
      </Flex>
      <Flex 
        flexDirection='column'
        ml={3}
        mr={3}
        mb={5}
      >
        <Text p={1} 
          ml={2}
          mt={5}
          fontSize='14px'
        >
          Profile link</Text>
        <InputGroup >
         <Input value={urlInput}  isReadOnly fontSize={12} ></Input>
         <InputRightElement 
         borderLeft='1px solid #E5E5E5'>
          
            
          <Box onClick={onCopy} > 
            <CopyIcon />
          </Box>
         </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  )
}

export default SideNav
