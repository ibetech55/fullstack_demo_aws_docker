import React from "react";
import { IGetQuotes } from "../../../Services/Quote/IQuotes";
import { Box, Typography } from "@mui/material";

interface IProps {
  quote: IGetQuotes;
}
const DetailedQuote = ({ quote }: IProps) => {
  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        Detailed Quote
      </Typography>
      <Typography>
        Date Created: {new Date(quote.createdAt).toLocaleDateString()}
      </Typography>
      <Typography>From: {quote.departureLocation}</Typography>
      <Typography>Destination: {quote.destinationLocation}</Typography>
      <Typography>Depart Date: {quote.departDate}</Typography>
      <Typography>Return Date: {quote.returnDate}</Typography>
      <Typography>People: {quote.numberTravellers}</Typography>
      <Typography>Transportation: {quote.transportation}</Typography>
      <Typography>Price: {quote.price}</Typography>
      <Typography>Status: {quote.status}</Typography>
      <Typography>
        Contact Name: {quote.contacts.firstName} {quote.contacts.lastName}
      </Typography>
      <Typography>
        Contact Phone Number: {quote.contacts.phoneNumber}
      </Typography>
    </Box>
  );
};

export default DetailedQuote;
