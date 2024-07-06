import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboradLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 349,
    },
    {
      name: "Withdraw",
      count: 349,
    },
    {
      name: "Trade",
      count: 349,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify={{ base: "center", md: "end" }} mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem" p={{ base: "4", md: "6" }}>
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            w="full"
            justifyContent="space-between"
          >
            <HStack
              spacing={{ base: "2", md: "4" }}
              mb={{ base: "4", md: "0" }}
            >
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup
              maxW={{ base: "full", md: "200px" }}
              pr={{ base: "0", md: "6" }}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
