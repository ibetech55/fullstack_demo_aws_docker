import { GetQuotesController } from "../../../Controllers/QuoteControllers/GetQuotesController";
import { GetQuotesUseCase } from "../../../Presentation/QuotesUseCases/GetQuotesUseCase";
import { QuoteRepository } from "../../../Repositories/quote";

const quoteRepository = new QuoteRepository();
const getQuotesUseCase = new GetQuotesUseCase(quoteRepository);
const getQuotesController = new GetQuotesController(getQuotesUseCase);
export { getQuotesUseCase, quoteRepository, getQuotesController };
