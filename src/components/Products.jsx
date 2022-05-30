import { Box, Center, Flex,  Grid, } from "@chakra-ui/react";
import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import "./Product.module.css"
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
   //const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
   <>
   
   <Center bg='gray' h='100px' color='blue'>
   <AddProduct />
</Center>
    <Flex>
  
    
     <Box p='4' bg='gray.400'>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      
      <Product/>
    </Grid>
  </Box>
    </Flex>
    <Center bg='tomato' h='100px' color='black'>
    <Pagination/>
</Center>
  
   </>
      
   

  );
};

export default Products;
