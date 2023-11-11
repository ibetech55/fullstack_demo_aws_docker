import { GetQuoteDto } from "../../../Data/Quotes/GetQuoteDtos";
import { Quotes } from "../../../Entities/quote";
import { IQuoteRepository } from "../../../Repositories/quote/IQuoteRepository";

export class GetQuotesUseCase {
  private _repository: IQuoteRepository;
  constructor(repository: IQuoteRepository) {
    this._repository = repository;
  }

  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  id: string;

  async execute(): Promise<GetQuoteDto[]> {
    const data: Quotes[] = await this._repository.getAll();
    const quotesData = data.map((x: Quotes) => {
      return {
        departureLocation: x.departure_location,
        destinationLocation: x.destination_location,
        departDate: x.depart_date,
        returnDate: x.return_date,
        numberTravellers: x.number_travellers,
        status: x.status,
        active: x.active,
        contactId: x.contact_id,
        transportation: x.transportation,
        price: x.price,
        id: x._id,
        contacts: {
          firstName: x.contacts.first_name,
          lastName: x.contacts.last_name,
          address: x.contacts.address,
          city: x.contacts.city,
          state: x.contacts.state,
          zipCode: x.contacts.zip_code,
          phoneNumber: x.contacts.phone_number,
          email: x.contacts.email,
          id: x.contacts._id,
        },
      };
    }) as GetQuoteDto[];
    return quotesData;
  }
}
