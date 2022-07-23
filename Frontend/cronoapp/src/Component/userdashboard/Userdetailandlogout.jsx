import React from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,Flex,Box,Image,Button,Portal
  } from '@chakra-ui/react'


  export const UserDetails=()=>{
    const [email,setemail] = React.useState(localStorage.getItem("user"))

    return (
        <Popover>
            <PopoverTrigger>
                <Box w="20px" h="20px" mt="25px" ml="10px" p="5px">
                    <Image
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAtCAYAAAAwRkzIAAABJ0lEQVR4Xu3QUW7CMBRE0eysu+r2qVQVEKcBQmI7fva70v2B2J6Z5fL9dUnLufhDut/lin+kn3sbM0cto3v+4kfpNt3xAT9OX+t+q3goXdfdnuLB9L9u9hYvSO+61Wa8KD0w5hUvnFm32Y0Xz6ibHMYHZtItiuFDM+gGxfHBkbV7NXx4RO1cHQOMpF2bYZARtGNzDBRZu52GwSJqp9MxYCTt0g0GjaAdusPAPWv2bjF4j5q5eyzQk2YNg0V60ZyhsMzZmi8kljpLc4XGcq01T3gs2FKzDINFW2iG4bBwTX17WCxeQ98cHgcoqW9Ng0OU0Demw0GO6N3T4jB79M7pcaBP9K7kD4faonck4GCv9GzyBIdb0zPJGxwwxyyAQ+aYBcgxKxBpzB9KqKul5GkGVgAAAABJRU5ErkJggg=="
                    alt="dropdown"
                    />
                </Box>
            </PopoverTrigger>
            <Portal>
                <PopoverContent size="md" backgroundColor="white" color="#5c5c5c">
                <PopoverArrow />
                <PopoverHeader fontSize="12px">Signed in as :{email}</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                    <Button colorScheme='blue'>Logout</Button>
                </PopoverBody>
                <PopoverFooter></PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
  }