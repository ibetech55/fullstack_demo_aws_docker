import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { Contacts } from "../../Entities/contact";
import { IContactRepository } from "./IContactRepository";

export class ContactRepository implements IContactRepository {
  private readonly repository: Repository<Contacts>;

  constructor() {
    this.repository = AppDataSource.getRepository<Contacts>(Contacts);
  }
  async getContactById(id: string): Promise<Contacts> {
    try {
      const data = await this.repository.findOneBy({ _id: id });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(values: Contacts): Promise<Contacts> {
    try {
      const createdContact = this.repository.create(values);
      const newContact = await this.repository.save(createdContact);
      return newContact;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
