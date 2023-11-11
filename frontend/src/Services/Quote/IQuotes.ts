import { IGetContact } from "../Contact/IContact";

export interface IGetQuotes {
  departureLocation: string;
  destinationLocation: string;
  departDate: string;
  returnDate: string;
  numberTravellers: number;
  status: string;
  active: boolean;
  contactId: string;
  transportation: string;
  id: string;
  contacts: IGetContact;
  price: number;
  createdAt: string;
}

export interface ICreateQuote {
  from: string;
  destinationLocation: string;
  departureLocation: string;
  departDate: string;
  returnDate: string;
  numberTravellers: string;
  contactId: string;
  transportation: string;
}
