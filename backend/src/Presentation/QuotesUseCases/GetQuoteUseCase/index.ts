import { GetQuoteDto } from "../../../Data/Quotes/GetQuoteDtos";
import { Quotes } from "../../../Entities/quote";
import { IQuoteRepository } from "../../../Repositories/quote/IQuoteRepository";

export class GetQuoteUseCase {
  private _repository: IQuoteRepository;
  constructor(repository: IQuoteRepository) {
    this._repository = repository;
  }

  async execute(id: string): Promise<GetQuoteDto> {
    const data: Quotes = await this._repository.getQuoteById(id);
    const mappedData: GetQuoteDto = {
      createdAt: data.created_at.toString(),
      departureLocation: data.departure_location,
      destinationLocation: data.destination_location,
      departDate: data.depart_date,
      returnDate: data.return_date,
      numberTravellers: data.number_travellers,
      status: data.status,
      active: data.active,
      contactId: data.contact_id,
      transportation: data.transportation,
      id: data._id,
      contacts: {
        firstName: data.contacts.first_name,
        lastName: data.contacts.last_name,
        address: data.contacts.address,
        city: data.contacts.city,
        state: data.contacts.state,
        zipCode: data.contacts.zip_code,
        phoneNumber: data.contacts.phone_number,
        email: data.contacts.email,
        id: data.contacts._id,
      },
      price: data.price,
    };
    return mappedData;
  }
}
