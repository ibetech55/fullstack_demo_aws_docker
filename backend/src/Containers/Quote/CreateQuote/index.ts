import { CreateQuoteController } from "../../../Controllers/QuoteControllers/CreateQuoteController";
import { CreateQuoteUseCase } from "../../../Presentation/QuotesUseCases/CreateQuoteUseCase";
import { QuoteRepository } from "../../../Repositories/quote";

const quoteRepository = new QuoteRepository();
const createQuoteUseCase = new CreateQuoteUseCase(quoteRepository);
const createQuoteController = new CreateQuoteController(createQuoteUseCase);
export { createQuoteUseCase, quoteRepository, createQuoteController };
