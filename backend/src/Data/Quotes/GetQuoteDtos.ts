import { GetContactDto } from "../Contacts/GetContactDtos";

export interface GetQuoteDto {
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
  contacts: GetContactDto;
  price: number;
  createdAt: string;
}
