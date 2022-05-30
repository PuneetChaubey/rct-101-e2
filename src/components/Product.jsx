import { Box, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios"
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [item, setItem] = useState([{
    "id": 0,
    "title": "react tshirt",
    "category": "pant",
    "gender": "male",
    "imageSrc": "https://picsum.photos/seed/picsum6/420/260",
    "price": "23.00"
  }])
  useEffect(() => {
    axios.get("http://localhost:8080/products")
    .then((res)=>{
     // console.log(res.data[0])
      let data = res.data;
      setItem([...item, ...data])
      
    })
   
  }, [])
 console.log(item)
  return (
    <>
    {/* {console.log(item[4].title)} */}
    {
      item.map((el)=>{
        return <div key={Date.now}>
           <Stack data-cy="product">
      <Image data-cy="product-image" src={el.imageSrc} />
      <Text data-cy="product-category">{el.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{el.title}</Heading>
      <Box data-cy="product-price">{el.price}</Box>
    </Stack>
        </div>
        console.log(el)
      })
    }
   
    </>
  );
};

export default Product;
