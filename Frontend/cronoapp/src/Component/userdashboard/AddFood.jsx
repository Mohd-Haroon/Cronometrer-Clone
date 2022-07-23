import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    HStack,
    VStack,
    Box,
    Flex,
    Image,
    ListItem,
    UnorderedList,
    Button,
    Text,
    Table,
    Tbody,
    Tr,Td,TableContainer,Input 
  } from "@chakra-ui/react";
  import {AddFooddata} from "./data"
  
  function AddFood({handlechange}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData] = React.useState({})
    const [opn,setCls] = React.useState(false)

    return (
      <>
        <Button onClick={onOpen} color="#404040" fontSize="14px" fontWeight="700" p="4px 12px" textAlign="left" border="none" borderRadius="14px"  mr="5px">
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAABoklEQVR4XrVWwU7CQBDtJ/AJfAJ/YJPuht2YKAcPWkzsxdKb3D3I3UT5BM62Bm56k8QPgHtL6h/AH+BM29V2thgqyyQvlJnZebPTmQHLqhE/7A8HUf9DwY+uesrmTb0W2J/90F0A5qVj+8sgdGcQeFtG8Op6wfSyPYjcVOn+TRCE1zYl8KP+uriRCr4BsjE9u7cUZaqQlLDEUtEzjeX2xe1ApiMkgxtMFAGWi/o2kpTzTtxl54lwbvAZdeX3gtmntt1KJT9ZdfkdfuJ3GkeTRDq9WPJFIvm2AsHTd//07fHpYjG5P/tMJJtqPpKtV4I97CRaSTbUDzUHJqiRYObU8RAgSZVAsA11OhRYkSI496jRCOC9qexnmtEQsg6MBV9Sgzk4PUtXmkMs2OioBNmLhgH5ogZTgBvYFvTsnBpMISOAhzE1mELepoanWAErU8zxcSYZB/iXwHSZIOHKwkuF3dacDoP+U4rKGsfmoNkrQaWJmfjZonWCfUsPNAIsThpTk7/X9+4b4tKsLU2d4E3Uls0mvdxyVv6nAHSTvL0z0vGu4N8O/opsvXoX7wAAAABJRU5ErkJggg==" />
                <Text ml="7px">ADD FOOD</Text>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl" >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader backgroundColor="#f8f8f8" boxShadow="0px 3px 6px #d4d4d4" p="15px 0px 15px 15px" color="#5c5c5c" >Add Food To Diary</ModalHeader>
            <ModalCloseButton color="#5c5c5c" />
            <ModalBody backgroundColor="#f8f8f8">
                <VStack color="#5c5c5c">
                    <HStack w="100%" ml="-50px" mr="-10px" borderTop="1px solid #eee" borderBottom="1px solid #c6c6c6" pl="8px" pt="15px" mt="5px" fontSize="12px" align="left" backgroundColor="#f7f7f7">
                        <Box as="button" pl="7px" pr="7px"  _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>All</Box>
                        <Box as="button"  pl="7px" pr="7px"  _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Favorites</Box>
                        <Box as="button"  pl="7px" pr="7px" _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Common Foods</Box>
                        <Box as="button"  pl="7px" pr="7px" _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Supplements</Box>
                         <Box as="button" pl="7px" pr="7px"  _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Brands</Box>
                         <Box as="button" pl="7px" pr="7px" _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Restaurants</Box>
                         <Box as="button" pl="7px" pr="7px" _focus={{
                            backgroundColor:"white",
                            border:"1px solid #c6c6c6",
                            borderBottom:"1px solid white",
                            borderTopLeftRadius:"3px",
                            borderTopRightRadius:"3px",
                            color:"#494949"
                        }}>Custom</Box>
                    </HStack>
                    <Box w="100%" border="1px solid #eee" borderRadius="6px" m="3px 6px 1px 6px">
                        <Box fontSize="14px" w="100%" overflow="auto" position="relative" h="15em">
                            <TableContainer w="100%">
                                <Table  variant='striped' colorScheme='#f7f7f7' textAlign="left" color="#222" border="1px solid #eee" borderRadius="2px">
                                    <Tbody lineHeight="15px">
                                        <Tr >
                                            <Td backgroundColor="#eeeeee" >
                                                <Box  backgroundColor="#eeeeee" h="10px" whitespace="nowrap">
                                                    Description
                                                </Box>
                                            </Td>
                                            <Td  backgroundColor="#eeeeee">
                                                <Box  backgroundColor="#eeeeee" h="10px" whitespace="nowrap">
                                                    Source
                                                </Box>
                                            </Td>
                                        </Tr>
                                            {
                                                AddFooddata.map((item,index)=>{
                                                    return <Tr key={index} onClick={()=>{
                                                                setData({description:item.desc,energy:item.energy})
                                                                setCls(true)
                                                                console.log("itemmm")
                                                                }}>
                                                                <Td>
                                                                    <Box h="10px" whitespace="nowrap">
                                                                        {item.desc}
                                                                    </Box>
                                                                </Td>
                                                                <Td>
                                                                    <Box h="10px" whitespace="nowrap">
                                                                        {item.Source}
                                                                    </Box>
                                                                </Td>
                                                            </Tr>
                                                })
                                            }
                                        
                                        
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            
                        </Box>
                    </Box>
                    {/* bottom box */}
                    
                </VStack>
            </ModalBody>
            {
                opn && <ModalFooter backgroundColor="#f8f8f8" w="100%" border="1px solid red" >
                <VStack mt="5px" textAlign="center" borderRadius="5px" w="100%">
                    <Box color="#5c5c5c" fontSize="16px" textAlign="center" fontWeight="600" lineHeight="100%" display="inline-block" maxWidth="90%" verticalAlign="middle" m="0px 0px 5px 5px">
                        {data.desc}
                    </Box>
                    <VStack w="60%" backgroundColor="#efefef" verticalAlign="middle" p="8px 5px" borderRadius="3px">
                        <Box w="100%" textAlign="left" color="#5c5c5c"  >Serving:</Box>
                        <Flex m="5px 10px" h="25px" verticalAlign="center">
                            <Box color="#5c5c5c" textAlign="left">
                                <Input p="0 10px" type="number"  border="1px solid #5c5c5c" borderRadius="2px" backgroundColor="#fbfbfa" fontSize="12px" height="23px" verticalAlign="top" onChange={(e)=>setData({...data,amount:e.target.value})} />
                            </Box>
                            <Box ml="5px" color="#5c5c5c" textAlign="left">
                                <Input  p="0 10px" type="text" border="1px solid #5c5c5c" borderRadius="2px" backgroundColor="#fbfbfa" fontSize="12px" height="23px" verticalAlign="top" onChange={(e)=>setData({...data,unit:e.target.value})}/>
                            </Box>
                            <Box float="right" >
                                <Button h="25px" cursor="pointer" color="#fff" border="1px solid #ff763f" background="#ff763f" p="0px 20px" fontSize="14px" fontWeight="600" borderRadius="6px" verticalAlign="top" onClick={()=>{
                                    setCls(false)
                                    handlechange(data)}}>ADD</Button>
                            </Box>
                        </Flex>
                    </VStack>
                </VStack>
            </ModalFooter>
            }
            
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddFood;