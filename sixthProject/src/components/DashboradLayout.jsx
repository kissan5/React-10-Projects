import { Box, Container, Flex } from '@chakra-ui/react'
import React, { Children } from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'

const DashboradLayout = ({title, children}) => {
  return (
    <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav title={title}/>
          <Container maxW="1280px" {...children}/>
        </Box>
      </Flex>
  )
}

export default DashboradLayout
