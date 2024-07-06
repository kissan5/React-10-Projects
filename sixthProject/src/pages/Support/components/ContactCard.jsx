import {
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of submit.
        </Text>
        <HStack flexDir={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter your surname" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="email" placeholder="Enter your message" />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs">
            I agree with{" "}
            <Box as="span" color="p.purple">
              Terms and condition.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a message</Button>
          <Button colorScheme="gray" fontSize="sm">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
