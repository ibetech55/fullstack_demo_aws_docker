import { CreateContactDto } from "../../../Data/Contacts/CreateContactDtos";
import { Contacts } from "../../../Entities/contact";
import { IContactRepository } from "../../../Repositories/contact/IContactRepository";

export class CreateContactUseCase {
  private _repository: IContactRepository;
  constructor(repository: IContactRepository) {
    this._repository = repository;
  }

  async execute(values: CreateContactDto): Promise<Contacts> {
    const data = await this._repository.create({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      address: values.address,
      city: values.city,
      state: values.state,
      phone_number: values.phoneNumber,
      zip_code: values.zipCode,
    });
    return data;
  }
}
