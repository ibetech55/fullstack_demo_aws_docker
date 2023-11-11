import { Request, Response } from "express";
import { GetQuotesUseCase } from "../../../Presentation/QuotesUseCases/GetQuotesUseCase";

export class GetQuotesController {
  private _getQuotesUseCase: GetQuotesUseCase;
  constructor(getQuotesUseCase: GetQuotesUseCase) {
    this._getQuotesUseCase = getQuotesUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getQuotesUseCase.execute();
    return response.status(200).json(data);
  }
}
