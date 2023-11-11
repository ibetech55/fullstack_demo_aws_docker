/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import DetailedQuote from "../../Components/QuoteComponent/DetailedQuote";
import { QuotesContext } from "../../Services/Quote/QuotesProvider";
import { useParams } from "react-router-dom";
import { IGetQuotes } from "../../Services/Quote/IQuotes";

const Quote = () => {
  const { getQuote } = useContext(QuotesContext);
  const { id } = useParams();
  const [quoteData, setQuoteData] = useState<IGetQuotes>({
    createdAt: "",
    departureLocation: "",
    destinationLocation: "",
    departDate: "",
    returnDate: "",
    numberTravellers: 0,
    status: "",
    active: false,
    contactId: "",
    transportation: "",
    id: "",
    contacts: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
      id: "",
    },
    price: 0,
  });
  const handleGetQuote = async () => {
    const data = await getQuote(id as string);
    setQuoteData(data);
  };
  useEffect(() => {
    handleGetQuote();
  }, []);

  return (
    <div>
      <DetailedQuote quote={quoteData} />
    </div>
  );
};

export default Quote;
