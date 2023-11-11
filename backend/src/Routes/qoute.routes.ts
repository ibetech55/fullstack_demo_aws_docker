import { Router } from "express";
import { createQuoteController } from "../Containers/Quote/CreateQuote";
import { getQuotesController } from "../Containers/Quote/GetQuotes";
import { getQuoteController } from "../Containers/Quote/GetQuote";

const QuoteRouter = Router();

QuoteRouter.post("/", (req, res) => createQuoteController.handle(req, res));
QuoteRouter.get("/", (req, res) => getQuotesController.handle(req, res));
QuoteRouter.get("/:id", (req, res) => getQuoteController.handle(req, res));

export { QuoteRouter };
