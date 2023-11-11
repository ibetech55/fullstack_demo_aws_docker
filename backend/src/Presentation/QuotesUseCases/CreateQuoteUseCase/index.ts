import { CreateQuoteDto } from "../../../Data/Quotes/CreateQuoteDtos";
import { Quotes } from "../../../Entities/quote";
import { IQuoteRepository } from "../../../Repositories/quote/IQuoteRepository";

export class CreateQuoteUseCase {
  private _repository: IQuoteRepository;
  constructor(repository: IQuoteRepository) {
    this._repository = repository;
  }

  async execute(values: CreateQuoteDto): Promise<Quotes> {
    const data = await this._repository.create({
      departure_location: values.departureLocation,
      destination_location: values.destinationLocation,
      depart_date: values.departDate as string,
      return_date: values.destinationLocation,
      number_travellers: Number(values.numberTravellers),
      active: values.active,
      transportation: values.transportation,
      contact_id: values.contactId,
      price: 1000.0,
      status: "Pending",
    });
    return data;
  }
}
