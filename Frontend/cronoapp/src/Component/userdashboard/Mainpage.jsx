import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Button
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export const UserMainPage = () => {
    const navigate = useNavigate()
  return (
    <VStack backgroundColor="white" w="100%">
      <HStack w="100%" h="60px" border="1px solid #E0E0DC">
        <Flex m="6px 0px 0px 30px">
          <Box w="200px" h="45px">
            <Image
              src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"
              alt="logo"
            />
          </Box>
          <Box w="20px" h="20px" mt="25px" ml="10px" p="5px">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAtCAYAAAAwRkzIAAABJ0lEQVR4Xu3QUW7CMBRE0eysu+r2qVQVEKcBQmI7fva70v2B2J6Z5fL9dUnLufhDut/lin+kn3sbM0cto3v+4kfpNt3xAT9OX+t+q3goXdfdnuLB9L9u9hYvSO+61Wa8KD0w5hUvnFm32Y0Xz6ibHMYHZtItiuFDM+gGxfHBkbV7NXx4RO1cHQOMpF2bYZARtGNzDBRZu52GwSJqp9MxYCTt0g0GjaAdusPAPWv2bjF4j5q5eyzQk2YNg0V60ZyhsMzZmi8kljpLc4XGcq01T3gs2FKzDINFW2iG4bBwTX17WCxeQ98cHgcoqW9Ng0OU0Demw0GO6N3T4jB79M7pcaBP9K7kD4faonck4GCv9GzyBIdb0zPJGxwwxyyAQ+aYBcgxKxBpzB9KqKul5GkGVgAAAABJRU5ErkJggg=="
              alt="dropdown"
            />
          </Box>
        </Flex>
        <Flex color="#E65F29" w="580px" h="60px" fontSize="14px" fontWeight="600" letterSpacing="0.05rem" ml="200px" borderBottom="1px solid #eee">
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px" onClick={()=>navigate("diary")}>Diary</Box>
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px">Trends</Box>
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px">Foods</Box>
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px">Settings</Box>
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px">Plans</Box>
          <Box as="button" _focus={{
            border:"1px solid #E0E0DC",
            borderBottom:"1px solid #FBFBFA",
            borderTopLeftRadius:"3px",
            borderTopRightRadius:"3px",
            color:"#B83805"
          }} p="6px 20px 9px" mt="30px">Help</Box>
        </Flex>
      </HStack>
      <VStack w="100%" backgroundColor="white">
          <Outlet />
      </VStack>
    </VStack>
  );
};
