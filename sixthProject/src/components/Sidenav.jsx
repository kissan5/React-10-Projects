import { Box, HStack, Icon, Text, Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh">
      <Heading
        textAlign="center"
        fontWeight="bold"
        fontSize="20px"
        as="h1"
        pt="3.5rem"
      >
        @DOSOMECODING
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
            borderRadius="10px"
            key={nav.text}
            py="3"
            px="4"
            _hover={{ bg: "#f3f3f7", color: "#171717", cursor: "pointer" }}
            color="#797E82"
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium">
              {nav.text}
            </Text>
          </HStack>
        ))}
      </Box>

      <HStack
            borderRadius="10px"
            key={nav.text}
            py="3"
            px="4"
            _hover={{ bg: "#f3f3f7", color: "#171717", cursor: "pointer" }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>

    </Stack>
  );
};

export default Sidenav;
