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
import {UserDetails} from "./Userdetailandlogout"
import { Outlet, useNavigate } from "react-router-dom";
import OTherFooter from "../../components/OTherFooter"

export const UserMainPage = () => {
    const navigate = useNavigate()
    const [token,setToken] = React.useState(localStorage.getItem("email"))
    React.useEffect(()=>{
      if(!token){
        navigate("/login");
      }
    },[])
    if(!token){
      navigate("/login");
    }
  return (
    <VStack backgroundColor="white" w="100%">
      <HStack w="100%" h="60px" border="1px solid #E0E0DC">
      <Flex m="6px 0px 0px 30px" mr="100px">
                <Box w="200px" h="45px">
                    <Image
                    src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"
                    alt="logo"
                    />
                </Box>
                <UserDetails/>
            </Flex>
        <Flex color="#E65F29" w="580px" h="60px" fontSize="14px" fontWeight="600" letterSpacing="0.05rem" ml="200px" borderBottom="1px solid #eee">
          <Box as="button" border="1px solid #E0E0DC" borderBottom="1px solid #FBFBFA" _focus={{
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
          }} p="6px 20px 9px" mt="30px" onClick={()=>navigate("settings")}>Settings</Box>
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
      <OTherFooter/>
    </VStack>
  );
};
