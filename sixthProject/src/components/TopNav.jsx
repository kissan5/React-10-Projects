import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaUserTie } from "react-icons/fa";

const TopNav = ({title}) => {
  return (
    <Box> 
      <HStack maxW="1280px" h="16" justify="space-between" px="32" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">title</Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px"/>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
