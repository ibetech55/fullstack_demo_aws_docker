import { GetQuoteController } from "../../../Controllers/QuoteControllers/GetQuoteController";
import { GetQuoteUseCase } from "../../../Presentation/QuotesUseCases/GetQuoteUseCase";
import { QuoteRepository } from "../../../Repositories/quote";

const quoteRepository = new QuoteRepository();
const getQuoteUseCase = new GetQuoteUseCase(quoteRepository);
const getQuoteController = new GetQuoteController(getQuoteUseCase);
export { getQuoteUseCase, quoteRepository, getQuoteController };
