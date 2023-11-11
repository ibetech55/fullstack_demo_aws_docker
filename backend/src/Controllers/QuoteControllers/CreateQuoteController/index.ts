import { Request, Response } from "express";
import { CreateQuoteUseCase } from "../../../Presentation/QuotesUseCases/CreateQuoteUseCase";

export class CreateQuoteController {
  private _createQuoteUseCase: CreateQuoteUseCase;
  constructor(createQuoteUseCase: CreateQuoteUseCase) {
    this._createQuoteUseCase = createQuoteUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createQuoteUseCase.execute(request.body);
    return response.status(201).json(data);
  }
}
