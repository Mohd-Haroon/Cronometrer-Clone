import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Box} from "@chakra-ui/react";



export const DatePick= ({datechange}) => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
        <DatePicker
        selected={startDate}
        onChange={(date) => datechange(date)}
        inline
        />
    </>
  );
}