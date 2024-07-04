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
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      h="full"
    >
      <Box>
        <Heading
          textAlign="center"
          fontWeight="bold"
          fontSize="20px"
          as="h1"
          pt="3.5rem"
        >
          EducationHub
        </Heading>

        <Box mt="6" mx="3" mb="6">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              px="4"
              py="3"
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
      </Box>

      <Box mx="3" mb="6">
        <HStack
          borderRadius="10px"
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
      </Box>
    </Stack>
  );
};

export default Sidenav;
