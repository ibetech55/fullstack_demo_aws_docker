import { ICreateContact } from "../Contacts/CreateContactDtos";

export interface CreateQuoteDto {
  departureLocation: string;
  destinationLocation: string;
  departDate: string | Date;
  returnDate: string | Date;
  numberTravellers: number;
  status: string;
  active: boolean;
  contactId: string;
  transportation: string;
  price: number;
}

export interface ICreateQuote {
  _id: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: boolean;
  active: boolean;
  created_at?: Date | string;
  deleted_at?: Date | string;
  updated_at?: Date | string;
  price: number;
}
