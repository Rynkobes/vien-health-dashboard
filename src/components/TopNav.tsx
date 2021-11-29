import React, {useState} from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import navIcon from '../assests/navIcon.png'
import { Flex, InputGroup, Input, InputRightElement, Button, Image } from '@chakra-ui/react'

const TopNav = () => {

  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState(['Terry'])

  const renderlist = () => {
    searchList.map((item, i) => {
      return(
        <Button key={i}>{item}</Button>
      )
    })
}

function handleSubmit() {
  setSearchList(prevState => [...prevState, searchValue])
  console.log(searchList)
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setSearchValue(e.target.value)
  // console.log(searchValue)
}

  return (
    <Flex as='header'
      bg='#ffffff'
      pl={20}
      pr={20}
      justify='space-between'
    >
      
      <Flex
            justify='center'
            align='center'
            mr={5}
          >
          <InputGroup
          onClick={handleSubmit}
              w='55%'
          >
            <InputRightElement
              pointerEvents="none"
              bg='#016450'
              borderRightRadius="10px"
              borderLeft='1px solid #016450'
              onClick={handleSubmit}
              children={<Search2Icon color="white" />}
            /> 
            <Input 
              w='40vw'
              type="text" 
              value={searchValue}
              onChange={handleChange}
              placeholder="Add more" 
              boxShadow="md"
              _hover = {{borderColor: 'none'}}
              focusBorderColor='none'
              borderRadius="10px"
              borderColor='#fff'
              />
          </InputGroup>
          </Flex>
          <Flex
            p={5}
            align='center'
          >
            <Button bg='none' mr={10} color='#1A1A1A' fontSize={15} fontWeight='400'>Udwell Now</Button>
            <Button bg='none' mr={20} color='#1A1A1A' fontSize={15} fontWeight='400'>Sell a property</Button>
            <Image src={navIcon} h={6} />
          </Flex>
    </Flex>
  )
}

export default TopNav
