import { Request, Response } from "express";
import { CreateContactUseCase } from "../../../Presentation/ContactsUseCases/CreateContactUseCase";

export class CreateContactController {
  private _createContactUseCase: CreateContactUseCase;
  constructor(createContactUseCase: CreateContactUseCase) {
    this._createContactUseCase = createContactUseCase;
  }

  async handle(request: Request, response: Response) {
    const data = await this._createContactUseCase.execute(request.body);
    return response.status(201).json(data);
  }
}
