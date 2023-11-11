import { Contacts } from "../../Entities/contact";

export interface IContactRepository {
  create(values: Contacts): Promise<Contacts>;
  getContactById(id: string): Promise<Contacts>;
}
