import { Box, HStack, Icon, Text, Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

console.log(location);

const isActiveLink = (link) => {
  return location.pathname === link;
};

const Sidenav = () => {
  const location = useLocation();

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
          {navLinks.map((nav, index) => (
            <Link to={nav.link} key={index}>
              <HStack
                borderRadius="10px"
                px="4"
                py="3"
                bg={isActiveLink("nav.link") ? "#F3F3F7" : "transparent"}
                color={isActiveLink("nav.link") ? "#171717" : "#797E82"}
                _hover={{ bg: "#f3f3f7", color: "#171717", cursor: "pointer" }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/suppport") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/suppport") ? "#171717" : "#797E82"}
            _hover={{ bg: "#f3f3f7", color: "#171717", cursor: "pointer" }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
