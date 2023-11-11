import { Quotes } from "../../Entities/quote";

export interface IQuoteRepository {
  create(data: Quotes): Promise<Quotes>;
  getAll(): Promise<Quotes[]>;
  getQuoteById(id: string): Promise<Quotes>;
  deleteQuote(id: string): Promise<Quotes>;
  updateQuote(data: Quotes): Promise<Boolean>;
}
