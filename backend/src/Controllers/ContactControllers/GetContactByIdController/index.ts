import { Request, Response } from "express";
import { GetContactByIdUseCase } from "../../../Presentation/ContactsUseCases/GetContactByIdUseCase";

export class GetContactByIdController {
  private _getContactByIdUseCase: GetContactByIdUseCase;
  constructor(getContactByIdUseCase: GetContactByIdUseCase) {
    this._getContactByIdUseCase = getContactByIdUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._getContactByIdUseCase.execute(request.params.id);
    return response.status(200).json(data);
  }
}
