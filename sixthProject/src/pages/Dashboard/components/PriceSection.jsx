import { HStack, Stack, Text, Tag, Icon, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const PriceSection = () => {
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={{ base: 0, xl: "16" }}
            align={{ base: "flex-start", xl: "center" }}
            flexDir={{ base: "column", xl: "row" }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <HStack fontWeight="medium" color="green.400">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
    </CustomCard>
  );
};

export default PriceSection;
