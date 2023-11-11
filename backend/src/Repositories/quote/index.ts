import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { Quotes } from "../../Entities/quote";
import { IQuoteRepository } from "./IQuoteRepository";

export class QuoteRepository implements IQuoteRepository {
  private readonly repository: Repository<Quotes>;

  constructor() {
    this.repository = AppDataSource.getRepository<Quotes>(Quotes);
  }
  async getAll(): Promise<Quotes[]> {
    try {
      const quoteData = await this.repository.find({
        relations: ["contacts"],
      });
      return quoteData;
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
  async getQuoteById(id: string): Promise<Quotes> {
    try {
      const quoteData = await this.repository.findOne({
        where: { _id: id },
        relations: ["contacts"],
      });
      return quoteData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteQuote(id: string): Promise<Quotes> {
    try {
      const quoteData = await this.repository.findOneBy({ active: false });
      return quoteData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateQuote(data: Quotes): Promise<Boolean> {
    try {
      await this.repository.update(data._id as string, data);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(values: Quotes): Promise<Quotes> {
    try {
      const createdQuote = this.repository.create(values);
      const newQuote = await this.repository.save(createdQuote);
      return newQuote;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
