import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const TransactionTable = () => {
const tableData = [
    {
        id:"HD82NA2H",
        date:"",
        time:"",    
        type:{
            name:"",
            tag:"",
        },
        amount:"",
        status:"",
    }
]

  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Date & Time</Th>
        <Th >Type</Th>
        <Th >Amount</Th>
        <Th >Status</Th>
      </Tr>
    </Thead>
    <Tbody color="p.black">
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default TransactionTable
