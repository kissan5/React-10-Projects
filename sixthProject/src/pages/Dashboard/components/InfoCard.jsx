import { Tag } from "@chakra-ui/react";
import React from "react";
import CustomCard from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
      <Tag color="white" bg="p.puprle" borderRadius="full">
        Loan
      </Tag>
      <Text textStyle="h5">Learn more about Loans - Keep your Bitcoin. access it</Text>
    </CustomCard>
  );
};

export default InfoCard;
