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
    Tr,Td
  } from "@chakra-ui/react";
  
  function AddFood() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} color="#404040" fontSize="14px" fontWeight="700" p="4px 12px" textAlign="left" border="none" borderRadius="14px"  mr="5px">
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAABoklEQVR4XrVWwU7CQBDtJ/AJfAJ/YJPuht2YKAcPWkzsxdKb3D3I3UT5BM62Bm56k8QPgHtL6h/AH+BM29V2thgqyyQvlJnZebPTmQHLqhE/7A8HUf9DwY+uesrmTb0W2J/90F0A5qVj+8sgdGcQeFtG8Op6wfSyPYjcVOn+TRCE1zYl8KP+uriRCr4BsjE9u7cUZaqQlLDEUtEzjeX2xe1ApiMkgxtMFAGWi/o2kpTzTtxl54lwbvAZdeX3gtmntt1KJT9ZdfkdfuJ3GkeTRDq9WPJFIvm2AsHTd//07fHpYjG5P/tMJJtqPpKtV4I97CRaSTbUDzUHJqiRYObU8RAgSZVAsA11OhRYkSI496jRCOC9qexnmtEQsg6MBV9Sgzk4PUtXmkMs2OioBNmLhgH5ogZTgBvYFvTsnBpMISOAhzE1mELepoanWAErU8zxcSYZB/iXwHSZIOHKwkuF3dacDoP+U4rKGsfmoNkrQaWJmfjZonWCfUsPNAIsThpTk7/X9+4b4tKsLU2d4E3Uls0mvdxyVv6nAHSTvL0z0vGu4N8O/opsvXoX7wAAAABJRU5ErkJggg==" />
                <Text ml="7px">ADD FOOD</Text>
            </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl" >
          <ModalOverlay />
          <ModalContent backgroundColor="white" color="black">
            <ModalHeader backgroundColor="#f8f8f8" boxShadow="0px 3px 6px #d4d4d4" p="15px 0px 15px 15px" >Modal Titleeee</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
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
                            <Table size="sm" variant='striped' colorScheme='#f7f7f7'  borderCollapse="collapse" textAlign="left" color="#222" border="1px solid #eee" borderRadius="2px">
                                <Tbody lineHeight="15px">
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Description
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box h="10px" whitespace="nowrap">
                                                Source
                                            </Box>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                </VStack>
            </ModalBody>
  
            <ModalFooter>
                
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button color="black" variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddFood;