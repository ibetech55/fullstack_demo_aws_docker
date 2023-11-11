import { GetContactDto } from "../../../Data/Contacts/GetContactDtos";
import { IContactRepository } from "../../../Repositories/contact/IContactRepository";

export class GetContactByIdUseCase {
  private _repository: IContactRepository;
  constructor(repository: IContactRepository) {
    this._repository = repository;
  }

  async execute(id: string): Promise<GetContactDto> {
    const data = await this._repository.getContactById(id);

    const mappedData: GetContactDto = {
      firstName: data.first_name,
      lastName: data.last_name,
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zip_code,
      phoneNumber: data.phone_number,
      email: data.email,
      id: data._id,
    };
    return mappedData;
  }
}
