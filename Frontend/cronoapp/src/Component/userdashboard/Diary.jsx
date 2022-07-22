import React from "react";
import AddFood from "./AddFood"
import {
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
    Tr,Td,Thead,TableContainer
} from "@chakra-ui/react";
import {DatePick} from "./Datepicker"
import {useDispatch,useSelector} from "react-redux";
import {getData,postData} from "../../Redux/actiontypes"

export const Diary = () => {
    const {currentdata,success} = useSelector((store)=>store.diary);
    const dispatch = useDispatch()
  const [datee,setDate] = React.useState(new Date())
  const [maindata,setMainData] = React.useState({})

  React.useEffect(()=>{
    // get data after rendering
    dispatch(getData())
  },[dispatch])
  
  //data sending to post
  const handlechange=(da)=>{
    console.log("dateee",datee.toDateString())
    let a = (datee.toDateString()).toString();
    let b = {...da,date:a,energy:"100 kcal"}
    console.log("diarymaindata",b)
    postData(b,dispatch)
  }
    //date change callback
  const datechange=(date)=>{
    //setting date from calender
    setDate(date)
    console.log('dateeeee',datee.toDateString())
  }

  return (
    <VStack border="1px solid white" w="80%" h="auto" mt="30px">
      <Flex w="100%" gap="10px">
        <VStack  border="1px solid #eee" w="30%">
            <DatePick datechange={datechange} />
        </VStack>
        <VStack   w="70%">
        <Box w="100%">
            <AddFood handlechange={handlechange} />
            <Button color="#404040" fontSize="14px" fontWeight="700" p="4px 12px" textAlign="left" border="none" borderRadius="14px" mr="5px" >
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAABtElEQVR4Xq1W61HDMAzOCIzQEdgARnA26AawAWwAv5uUdoOyAWzQbkAuzl1/lg2oJNuJLT/iOnx3uqaxrE8vy6mqBRC780q08iDa/gLyA89PXGcxxO5yJxp5rFv5Z4tohmeuuwhA8shJFJE8ct1FgFQJTqKl47pZwBTVH/LByPT+vKqb/pcTQZ3e7f2zMIXmhrSxA6aOorLJmv4THVP7sYb9m/kfhNgOa248JESIDiEp/I771TtqFOrGzXBvmddKIZJGfivxUzUSbuULiW53Zx1scp4KFrqJYEoFArx85SRJAceCJAZkECJw3lHNXE9TArp7O53ZwOi4MS2nsU5wWFW9Eg2QQuxwkuewxvWLUdt1swWi5LrFiDYAFrqkBiGkGgAd4PrFwM7hBFq6ooJjr/M0pBpARTQzXjhwPIQ2w/+TZRifvYZQF17mZUejxd/sDFMzq9RB9sdQVr10ijxvJ2J37Oub1SEk53LTiKc64G206HRPuWR7rhMFeQsRjJtnTj0/Y3P6Huj8pKauBYzaSvMXX/838G+HXAeLYHcu3aiRui4GfaiYqHAG3lqrW4BNRBKJ5grd7Oe2o+DGBQAAAABJRU5ErkJggg==" />
                <Text ml="7px">ADD EXERCISE</Text>
            </Button>
            <Button color="#404040" fontSize="14px" fontWeight="700" p="4px 12px" textAlign="left" border="none" borderRadius="14px" mr="5px" >
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAbCAYAAACAyoQSAAAB60lEQVR4XrVW3W3CMBBmhI7QEToCDyTqIyOwQbtBkK0+lw3KBu0G7QZkg6IEiUe6QXuf7TPO2YlDCid9IrJ9/u7fzGZC2oWet6V+bwp1ot/fplTf9P2GdXmW5TSv7tpCPxE+oWNQ6B39VsfH6l6e9+IUz0oJkAGvUu9QvDzAMHnW65Dxh0KtpB4TwrJISQJes54hdBHJISImwo08NAQQX0LodE4+1PiQB8ZgKKR9aEq9neTlf4FUEqn6khs3BbogWhwLMpbCtYzW81hPJuVqbEtVy70MppNyJeISuZfBOp9TKrQ4jKrmykfrRDoDwF3Z6mWPmkL/+HXSQRVyC3T2MjDVO2Qp9eIHLjUX0zev29Gnl2h4u6e3Xq/QexO9JPSG74O3e0loSfUSBCaMC/Vs1sirkIgN4D3jyRgxUwmviwD2cDkqlSMShdSFOvxOj0dbBx1x1lYh8KpIotAAR7TDHsJnC0utYkIbkQ4hBAp9BYE5izPIq/Oq0ybQ9S2USlWYSylxa3Qv5pDLgcCDIu2lqrN57lRi4mKfvwBc5dLLiworRcx5TXtj30tJmMzjkEjiMK+SUMLUxsB/qkFJEUsCiUkeSsmNyasTsvTlsYsRVXqpIEf9fay3VydksS/LuZB4QslzNxE7/FU9NX9/tgR0Z1Ljx18AAAAASUVORK5CYII=" />
                <Text ml="7px">ADD BIOMETRIC</Text>
            </Button>
            <Button color="#404040" fontSize="14px" fontWeight="700" p="4px 12px" textAlign="left" border="none" borderRadius="14px" mr="5px" >
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAABC0lEQVR4Xs2WTQqCQBiGbd8InaHu0L4LBJ2lVRC0ySxadxB15SpoUVeYFq0Ko72OaDbNICWMmn/fkC88oI4zz+YVP4VSpUOs7tw10N0zVVoXYqGZUhTXRJq4sS6FQiZzxE1V8I9j6lm95JmBpqLjG7YYiQdUIbzs6NMxygkhZDylhFCyUkJIWaEQWvZT6JnoJR5QhSwZT6ZQloxHFDaW+acJDfEqF/8wgpNV4X+yAOs0OG/ACLEmypIb8ESkJbKAtSfAazBCvMyXyeZ/srhF28YQe5AS8dZLKQjZD1sm4x9h3MhmELtfLJMLkzWdF0tjoBv/U+upBQm4prpQ+ETML9j8+BBfgAFdP2PBG9XdDDHqbQnFAAAAAElFTkSuQmCC" />
                <Text ml="7px">ADD NOTE</Text>
            </Button>
            <Image p="2px" mt="10px" float="right" w="25px" h="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAABaklEQVR4Xu3azU3DQBAG0LlxoQXIhRKhBkQJUASUACVAJwgJceLHI+VCVpGdeM0Y6T3pk1DivcxhY3a/CAAAAAAAgPU5G3I15GnI6zb5d36W37GQ0yEPQ76GfO9JfpfP5LN0dDLkJdqB70s+m2vo5C7aIY8l19DBxZDPaAc8llyTa5npOtrhTk2uZabnaAc7NflbwEwf0Q52at6D2d6iHezU5FpmsgUVu4l2sFOTa5lpE8e/hp4HXdxGO+Cx+EesozxWOOS3wFHEAvKA7T7GD+PyGYdxC8p9/TJ+H0c/bj+z5wMAACxAL6iIXlAhvaBiekGF9IKK6QUVO+QiZjcu5TvQCyqmF1TMFlRML6jYJo5/DXVH3IleUDG9oBXQC1oJvSAAAIA/phdURC+okF5QMb2gQnpBxfSCih1yEbMbl/Id6AUV0wsqZgsqphdUbBPHv4a6I+5EL6iYXtAK6AWthF4QAAAAAADwr/wAXpVUQUN5zAgAAAAASUVORK5CYII=" />
        </Box>
        {/* //table */}
        <Box border="1px solid #e7e9ea" borderRadius="5px" m="13px 0px 5px 0px" minHeight="300px" w="100%" overflow="visible">
          <TableContainer w="100%">
            <Table textAlign="left" color="#222" border="1px solid #eee" borderRadius="2px">
                                    <Thead lineHeight="15px">
                                        <Tr backgroundColor="#eee">
                                            <Td backgroundColor="#eeeeee">
                                                <Box h="10px" backgroundColor="#eee" whitespace="nowrap">
                                                    Description
                                                </Box>
                                            </Td>
                                            <Td backgroundColor="#eeeeee" textAlign="right">
                                                <Box h="10px" backgroundColor="#eee" whitespace="nowrap">
                                                    Amount
                                                </Box>
                                            </Td>
                                            <Td backgroundColor="#eeeeee" textAlign="left">
                                                <Box h="10px" backgroundColor="#eee" whitespace="nowrap">
                                                    Unit
                                                </Box>
                                            </Td>
                                            <Td backgroundColor="#eeeeee" textAlign="right">
                                                <Box h="10px" backgroundColor="#eee" whitespace="nowrap">
                                                    Energy(kcal)
                                                </Box>
                                            </Td>
                                        </Tr>
                                            
                                    </Thead>
                                    <Tbody>
                                        {
                                            success && currentdata.map((el)=>{
                                                return <Tr key={el._id}>
                                                            <Td>
                                                                <Box h="10px" whitespace="nowrap">
                                                                    {el.description}
                                                                </Box>
                                                            </Td>
                                                            <Td textAlign="right">
                                                                <Box h="10px" whitespace="nowrap">
                                                                {el.amount}
                                                                </Box>
                                                            </Td>
                                                            <Td textAlign="left">
                                                                <Box h="10px" whitespace="nowrap">
                                                                {el.unit}
                                                                </Box>
                                                            </Td>
                                                            <Td textAlign="right">
                                                                <Box h="10px" whitespace="nowrap">
                                                                {el.energy}
                                                                </Box>
                                                            </Td>
                                                        </Tr>
                                            })
                                            
                                        }
                                        
                                    </Tbody>
            </Table>
          </TableContainer>
        </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};
