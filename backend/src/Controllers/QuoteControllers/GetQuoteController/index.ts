import { Request, Response } from "express";
import { GetQuoteUseCase } from "../../../Presentation/QuotesUseCases/GetQuoteUseCase";

export class GetQuoteController {
  private _getQuoteUseCase: GetQuoteUseCase;
  constructor(getQuoteUseCase: GetQuoteUseCase) {
    this._getQuoteUseCase = getQuoteUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getQuoteUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
