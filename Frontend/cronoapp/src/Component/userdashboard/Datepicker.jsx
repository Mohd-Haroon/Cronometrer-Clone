import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Box} from "@chakra-ui/react";



export const DatePick= ({setDate,datechange}) => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
        <DatePicker
        selected={startDate}
        onChange={(date) => {
          setDate(date)
          datechange(date)}}
        inline
        />
    </>
  );
}